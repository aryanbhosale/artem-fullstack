export const categories = [
    {
      name: 'Cars',
      image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg',
    },
    {
      name: 'Fitness',
      image: 'https://i.pinimg.com/236x/25/14/29/251429345940a47490cc3d47dfe0a8eb.jpg',
    },
    {
      name: 'Wallpaper',
      image: 'https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg',
    }, {
      name: 'memes',
      image: 'https://freepngimg.com/download/internet_meme/3-2-troll-face-meme-png.png',
    },
    {
      name: 'Websites',
      image: 'https://i.pinimg.com/750x/66/b1/29/66b1296d36598122e6a4c5452b5a7149.jpg',
    },
    {
      name: 'Photo',
      image: 'https://i.pinimg.com/236x/72/8c/b4/728cb43f48ca762a75da645c121e5c57.jpg',
    },
    {
      name: 'Food',
      image: 'https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg',
    },
    {
      name: 'Nature',
      image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg',
    },
    {
      name: 'Art',
      image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
    }, {
      name: 'Travel',
      image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
    }, {
      name: 'Gaming',
      image: 'https://cpng.pikpng.com/pngl/s/202-2023517_png-file-svg-play-game-icon-clipart.png',
    }, {
      name: 'Music',
      image: 'https://e7.pngegg.com/pngimages/69/982/png-clipart-music-icon-itunes-computer-icons-logo-itunes-text-logo.png',
    },
    {
      name: 'Quotes',
      image: 'https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg',
    }, {
      name: 'Cats',
      image: 'https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg',
    }, {
      name: 'Dogs',
      image: 'https://i.pinimg.com/236x/1b/c8/30/1bc83077e363db1a394bf6a64b071e9f.jpg',
    }, {
      name: 'Movies',
      image: 'https://i.pinimg.com/originals/6b/4a/73/6b4a738dd051ec314307435efa574807.png',
    }, {
      name: 'Shows',
      image: 'https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png',
    }, {
      name: 'Hentai',
      image: 'https://64.media.tumblr.com/33728389936c1285968a84135798d678/tumblr_pkpdu2ffr31tx3jbk_400.jpg',
    }, {
      name: 'Fashion',
      image: 'https://static.thenounproject.com/png/337564-200.png',
    }, {
      name: 'Science',
      image: 'https://thumbs.dreamstime.com/b/science-icon-simple-line-element-symbol-templates-web-design-infographics-171582005.jpg',
    }, {
      name: 'Tech',
      image: 'https://thumbs.dreamstime.com/b/digital-tech-icon-vector-set-technologies-illustration-sign-collecion-information-symbol-data-center-logo-can-be-used-web-185753730.jpg',
    }, {
      name: 'Ghot',
      image: 'https://cdn-icons-png.flaticon.com/512/29/29302.png',
    }, {
      name: 'Lite',
      image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/chill-1649587-1399549.png',
    }, {
      name: 'Sports',
      image: 'https://www.pngitem.com/pimgs/m/244-2443980_sports-icon-basketball-designs-on-paper-hd-png.png',
    }, {
      name: 'Anime',
      image: 'https://wallpapers-clan.com/wp-content/uploads/2021/04/Anime-App-Icons-Settings.png',
    }, {
      name: 'NSFW',
      image: 'https://icon-library.com/images/nsfw-icon/nsfw-icon-11.jpg',
    },
    {
      name: 'Others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
  ];
  
  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };