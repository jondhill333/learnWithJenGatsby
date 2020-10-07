import fetch from 'isomorphic-fetch';

async function FetchPicturesfromInsta({
    actions,
    createNodeId,
    createContentDigest,
  }) {
    const res = await fetch('https://graph.instagram.com/me/media?fields=media_url,caption&access_token=IGQVJYcXZApc3BTSU11a0plM0FfeTVZAaDBwLUxpd2kzRnYtdFM5UkVQNFVWNE5jMl9hdTJURUpSWEt0UERvR3BLVDBMbjh4R3RfM1lwZA1psRFhNeTVnSEEyVzVjSVBPWk9VQS1JLURn');
    const blob = await res.json();
    const pics = blob.data;
    for (const pic of pics) {
      const nodeMeta = {
        id: createNodeId(pic.id),
        parent: null,
        children: [],
        internal: {
          type: 'pic',
          mediaType: 'application/json',
          contentDigest: createContentDigest(pic),
        },
      };
      actions.createNode({
        ...pic,
        ...nodeMeta,
      });
    }
  }


export async function sourceNodes(params) {
    await Promise.all([FetchPicturesfromInsta(params)]);
  }

 
  
