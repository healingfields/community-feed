import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Card from "../../components/Card";

const QuestionDetailContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    margin:5%;
    `;


function QuestionDetail() {

    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState({});


    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.stackexchange.com/2.3/questions/${id}?site=stackoverflow`
            );
            const result = await data.json();
            console.log(result);

            if (result.items.length) {
                setQuestion(result.items[0])
                setLoading(false);
            }
        }

        id && fetchData();
    }, [id])

    return (
        <>
            <Head>
                <title>{question.title}</title>
            </Head>
            <QuestionDetailContainer>
                <h2>Question: {id}</h2>
                {loading ? (<span>loading....</span>)
                    : (
                        <Card
                            title={question.title}
                            views={question.view_count}
                            answers={question.answers_count}
                        />
                    )}
            </QuestionDetailContainer>
        </>
    )
}

export default QuestionDetail