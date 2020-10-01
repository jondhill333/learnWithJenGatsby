import React from 'react';
import styled from 'styled-components';
// import fetch from 'isomorphic-fetch';

const PhotoGridStyles = styled.div`
  margin: 3rem 3.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;


export default function instagramPage({ data }) {
    const photos = data.instaPics.nodes;
    return (
        <>
        <PhotoGridStyles>
            {photos.map(photo => (
                <div key={photo.id}>
                    <img src={photo.media_url} alt='instagram post' />
                </div>
            ))}
        </PhotoGridStyles>

            <p>Hey, I'm the instagram page</p>
        </>
    );
}

export const query = graphql`
  query instaPicsQuery {
    instaPics: allPic {
      nodes {
        media_url
        id
      }
    }
  }
`;