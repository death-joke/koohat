//create a home page component who print "home page"
import React from 'react';
import '../css/home.css'

const HomePage = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
            <div id='home'>
            <h1>Welcome to our interactive quiz creation and participation game site!</h1>

<p>Dive into a fun world where you can express your creativity by creating exciting trivia and test your knowledge by taking quizzes created by other players. Whether you're a trivia buff, a general knowledge enthusiast or just looking for a fun way to test your knowledge, our platform is for you.

Creating your account is quick and easy. Once logged in, you'll have access to a host of exciting features. You can explore our extensive library of quizzes already created by other talented players, or you can start creating your own unique quizzes. Customize them by choosing from different question formats, adding images and setting difficulty levels.

But that's not all! Our site also offers you the opportunity to participate in quizzes and compete with other players. Compete against your friends, family or players from all over the world to reach the top of the leaderboard. With our online ranking system, you can track your progress and compete with the best players.

User-friendliness is at the heart of our gaming experience. You can interact with the community by leaving comments on quizzes, giving ratings and exchanging tips with other players. Take this opportunity to meet other trivia enthusiasts and expand your horizons.

Ready to join the fun? Create your account now and dive into the exciting world of trivia! Whether you want to test your knowledge, share your expertise or just have fun, our site offers a dynamic and engaging platform to satisfy all players. Take on challenges, create unforgettable quizzes and share fun moments with a community of passionate players.</p>


</div>
        </div>
    );
};

export default HomePage;