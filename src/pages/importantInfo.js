import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const MenuStyles = styled.div`
    display: grid;
    max-width: 2000px;
    margin: 10px 100px;
    grid-gap: 10px 50px;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    padding: 0;
    >* {
        grid-column: 1 / -1;
    }
    ul {
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) ) ; 
        grid-gap: 5px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    li:nth-child(2){
        transform: translateX(-5px);
    }
    li:nth-child(4){
        transform: translateX(20px);
    }
    li:nth-child(5){
        transform: translateX(-5px);
    }
`;

const ArticleStyles = styled.div`
    display: grid;
    max-width: 2000px;
    margin: 100px 100px;
    grid-gap: 10px 50px;
    grid-template-columns: 3fr 12fr 3fr;
    >* {
        grid-column: 2 / -2;
    }
    >figure {
      margin: 0;
      grid-column: 1 / -1;
    }
    figcaption {
      font-size: 10px;
    }

    >blockquote {
      grid-column: 1 / -1;
      font-size: 60px;
      font-style: italic;
      text-align: center;
      margin: 0;
    }

    .tip {
      padding: 10px;
      grid-row: span 5;
      align-self: start;
    }

    .tip-left {
      grid-column: 1 / span 1;
      text-align: right;
      border-right: 2px solid var(--red);
    }

    .tip-right {
      grid-column: span 1 / -1;
      border-left: 2px solid var(--red);
    }

    img {
      max-width: 100%;
    }



`;

export default function InfoPage(props) {
    return (
        <>
            <SEO title='Important Info' />
            <MenuStyles>
                <ul>
                    <li><a href="#beginning">Starting from the very beginning</a></li>
                    <li><a href="#theory">Theory Test Practice</a></li>
                    <li><a href="#experienced">I'm experienced but need to brush up on my skills</a></li>
                    <li><a href="#test">Booking my Driving Test</a></li>
                    <li><a href="#passPlus">Pass Plus</a></li>
                </ul>
            </MenuStyles>
            <ArticleStyles className="post" id="beginning">
                <h2>Chapter Three: The Great American Game</h2>

                <p>Dear Diary,</p>

                <p>Grandfather's creaky as his front porch, loads his shotgun beneath the awning, spittoon restless for rain, carpenter's
                chair against the whistling air. Rocking, back and forth, rocking snap shot picture - worth it, just like the movies</p>

                <div className="tip tip-right">
                <p>This is a song by
                    <a href="http://levithepoet.net/">Levi The Poet</a>
                </p>
                </div>


                <p>She said that he loved baseball, and James Earl Jones; said that he's got god talking inside of his thoughts while he's
                rounding those bases on his way back home</p>

                <blockquote>
                <p>"If you build it, they will come"</p>
                </blockquote>

                <p>If you build it, they will come (and baby listens to what the Lord say). But I've been getting pretty worn, building
                for nearly a decade</p>

                <figure>
                <img src="https://source.unsplash.com/1000x300" alt="wide angle"/>
                <figcaption>Super Nice Photo</figcaption>
                </figure>


                <p>In a perfect world we shouldn’t have been allowed to lose sight of what it means to love wholly. I’ve got a Polaroid
                hanging on my wall that a friend took of me and my angel. I remember the day like it’s something I can touch, but it’s
                stuck in the square between the borders of the film, and I can run my fingers over our faces, but I can’t get back
                to the places we were</p>


                <blockquote>
                <p>You’ve got a pain deep in your bones, son.</p>
                </blockquote>
                <p>"You’ve got a pain deep in your bones, son. It compels you forward like you’re tied to a slave master’s cruel hand, and
                it's the same pain that drives that oppressor’s heart of stone, so you’ve grown to love the man. You keep pouring yourself
                out, again and again, into legible lines through a crooked pen." Yeah, it’s painful, but it’s familiar – so habit breeds
                comfort, and I don’t know what I’d do without him</p>

                <div class="tip tip-left">
                <p>You can listen to this song on
                    <a href="https://www.youtube.com/watch?v=-gvpej9TT-g">YouTube</a>
                </p>
                </div>

                <p>So in the early morning, when you’ve fallen asleep in our home, I drift back into the memories that I’ve claimed as my
                own, and wonder if tonight will be a night I’ll hang on my wall like I did before we stopped taking photos, out of
                the habit of being comfortable with not trying at all</p>

                <p>In a perfect world, we’ll have albums labeled Seasons, with chapter headings, and we’ll staple them to the cork-board
                that hangs at the foot of the bed. There’s longevity in a memory spilt out in pen, and if a picture is worth a thousand
                words then I’ve written down every one of them</p>

                <p>I work hard, scarred, toil through that soil for the youth I see in my friends, but these journals are moments in time,
                snapshots of our lives, and in retrospect, age is an overexposed photo that the memories can't mend</p>

                <div class="tip tip-right">
                <img src="https://f4.bcbits.com/img/a1057026609_16.jpg" alt="Correspondence Album Cover" />
                <p>Buy the album on
                    <a href="https://levithepoet.bandcamp.com/album/correspondence-a-fiction">BandCamp</a>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam quia vel eveniet porro, rem ducimus quam incidunt,
                    dicta laborum quod earum tempore natus placeat neque aspernatur pariatur iusto quos.</p>
                </div>
                <p>I know my sweet seductress, and her name is Depression. I wrote best beneath that demon’s destructive oppression</p>


                <p>In those Polaroids, she drove the ink into the canvas like a slave beneath his master’s cruel hand, and I hated that
                whip but always wondered what I’d do without it, so I grew to love the man</p>

                <p>Oh, I wept for change! I begged for movement and the good Lord, he answered my prayers, but you don’t know how to breathe
                easy when you let go of your habits, even if your comforts left you gasping for air</p>
            </ArticleStyles>

        </>
    );
}