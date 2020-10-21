import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
// import fetch from 'isomorphic-fetch';

// const PhotoGridStyles = styled.div`
//   margin: 3rem 3.5rem;
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

// `;

// const PhotoStyles = styled.div`
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;

export default function instagramPage() {
// export default function instagramPage({ data }) {
    // const photos = data.instaPics.nodes;
    return (
        <>
        <SEO title='Instagram' />
          {/* <PhotoGridStyles>
              {photos.map(photo => (
                  <PhotoStyles key={photo.id}>
                      <img src={photo.media_url} alt='instagram post' />
                  </PhotoStyles>
              ))}
          </PhotoGridStyles> */}
          <p>Insta page will be back with a vengeance!</p>
        </>
    );
}

// export const query = graphql`
//   query instaPicsQuery {
//     instaPics: allPic {
//       nodes {
//         media_url
//         id
//         caption
//       }
//     }
//   }
// `;