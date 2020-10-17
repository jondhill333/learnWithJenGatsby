import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const AboutPageStyles = styled.div`
display: grid;
grid-template-columns: 40% 60%;
grid-template-rows: 90vh;
grid-gap: 2rem;
margin: 1rem;
.photoArea {
    display: flex;
    margin-top: 1.6rem;
    border: red solid 1px;
    height: 91%;
    width: 100%;  
    text-align: center;
    justify-content: center;
    align-items: center;
}
.textArea {
    font-size: 1.2rem;
    padding-right: 2rem;
    text-align: justify;
    line-height: 1.2;
    font-weight: 100;
}
@media(max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80vh;
    grid-gap: 0.1rem;
    .photoArea {
        border: red solid 1px;
        height: 90%;
        width: 100%;  
        margin-top: 1rem;
    }
    .textArea {
        font-size: 0.9rem;
        text-align: justify;
        padding-right: 0;
        transform: translateY(-30px);
    }
}
`;

export default function AboutPage(props) {
    return (
        <>
        <SEO title='About' />
        <AboutPageStyles>
        <div className="photoArea">
           <div>Hey im the photo section</div> 
        </div>
        <div className="textArea"> 
            <p>Hello, and congratulations to you for taking the first steps towards your future.</p>
            <p>
            I'm Jen, and helping people achieve their goals in life is my passion.  
            Learning to drive is an incredible life skill that sets you free.  
            Originally qualifying as a Driving Instructor back in 2010, there is no greater 
            feeling for me than seeing somebody go from being nervous the very first time 
            they sit behind the wheel, to going on to pass their test.  Watching my students flourish 
            in their own time at their own pace is one of my favourite reasons behind being a driving instructor. 
            </p>
            <p>
            2020 has been a different kind of year for everybody, and it made me realise I wanted 
            to help people achieve great things no matter what is going on in the world around us.  
            I wanted to get back to doing what I love and teach people to reach their potential.  
            Therefore, I decided to retrain as a driving instructor to ensure your success.
            </p>
            <p>
            Fully DBS checked, I'm one of very few independent female driving instructors based in my hometown 
            of Manchester. Being an independent driving instructor ensures I have little outgoings to run the business, 
            which enables me to keep the cost of your lessons as low as possible.  
            This way, I can provide lessons per hour and packages of lessons to suit every budget.
            </p>
            <p>
            Being a local instructor means I have the flexibility to suit your schedule.  
            This way, we can work together to ensure <strong>Your Success @ Your Pace</strong>.
            </p>
            <p>
            I look forward to helping you achieve your next life skill.
            </p>
        </div>
        </AboutPageStyles>

        </>
    );
}