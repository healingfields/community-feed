import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";

import Card from "../../components/Card";

const QuestionsContainer = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
margin:5%`;


function Questions() {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);

    const router = useRouter();
    const { page } = router.query;


    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.stackexchange.com/2.3/questions?${page ? `page=${page}&` : ''}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
            );
            const result = await data.json();

            if (result) {
                setQuestions(result.items);
                setLoading(false);
            }
        }
        fetchData();
    }, [page]);

    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            {loading ? (<span>Loading ....</span>)
                : (
                    <div>
                        {
                            questions.map((question) => (
                                <Card
                                    key={question.question_id}
                                    title={question.title}
                                    views={question.view_count}
                                    answers={question.answer_count}
                                />
                            ))
                        }
                    </div>
                )}
        </QuestionsContainer>
    )



}

export default Questions