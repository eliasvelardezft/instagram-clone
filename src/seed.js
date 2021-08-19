export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'Wl3vRxdKbCZKZVj1pbGDnDnVRBg2',
        username: 'eliasvelardezft_',
        fullName: 'Elias Velardez',
        emailAddress: 'eliasvelardez38@gmail.com',
        following: ['2', '3', '4'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'leomessi',
        fullName: 'Lionel Andres Messi',
        emailAddress: 'liomessi@gmail.com',
        following: ['Wl3vRxdKbCZKZVj1pbGDnDnVRBg2'],
        followers: ['Wl3vRxdKbCZKZVj1pbGDnDnVRBg2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'billgates',
        fullName: 'Bill Gates',
        emailAddress: 'billgates@hotmail.com',
        following: ['Wl3vRxdKbCZKZVj1pbGDnDnVRBg2'],
        followers: ['Wl3vRxdKbCZKZVj1pbGDnDnVRBg2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'dimaria',
        fullName: 'Angel Di Maria',
        emailAddress: 'dimaria@gmail.com',
        following: ['Wl3vRxdKbCZKZVj1pbGDnDnVRBg2'],
        followers: ['Wl3vRxdKbCZKZVj1pbGDnDnVRBg2'],
        dateCreated: Date.now()
      },
      {
        userId: '5',
        username: 'cerati',
        fullName: 'Gustavo Adrian Cerati',
        emailAddress: 'gustavocerati@gmail.com',
        following: [],
        followers: [],
        dateCreated: Date.now()
      }
    ];

    users.forEach(user => {
        firebase.firestore().collection('users').add(user);
    })
  
    for (let i = 1; i <= 4; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/messi/${i}.jpg`,
                caption: 'goat',
                likes: [],
                comments: [
                    {
                        displayName: 'dimaria',
                        comment: 'muy bueno'
                    },
                    {
                        displayName: 'billgates',
                        comment: 'you\'re great!'
                    }
                ],
                userLatitude: '40.7128°',
                userLongitude: '74.0060°',
                dateCreated: Date.now()
            });
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '5',
                imageSrc: `/images/users/cerati/${i}.jpg`,
                caption: 'te para tres',
                likes: [],
                comments: [
                    {
                        displayName: 'leomessi',
                        comment: 'muy bueno crack'
                    },
                    {
                        displayName: 'billgates',
                        comment: 'you\'re the best!'
                    }
                ],
                userLatitude: '41.7128°',
                userLongitude: '70.0060°',
                dateCreated: Date.now()
            });
    }
  }
  