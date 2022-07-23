import styled from "styled-components";

import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

const QuestionsContainer = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
margin:5%`;


function Questions({ questions, hasMore, page }) {

    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            <div>
                {questions.map((question) => (
                    <Card
                        key={question.question_id}
                        title={question.title}
                        views={question.view_count}
                        answers={question.answer_count}
                    />
                ))}
            </div>
            <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />
        </QuestionsContainer>
    )

}

export async function getServerSideProps(context) {

    const { page } = context.query;

    const data = await fetch(
        `https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : ''
        }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
    );
    const result = await data.json();

    return {
        props: {
            questions: result.items,
            hasMore: result.has_more,
            page: page || 1,
        }
    };
}

export default Questions