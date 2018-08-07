const videos = [
  {
    youtubeId: '6mTbuzafcII',
    slug: 'transducers',
    title: 'Transducers',
    by: 'Rich Hickey',
    category: 'Functional Programming',
    categorySlug: 'fp',
    color: 'rgb(102, 82, 57)',
    titleColor: 'rgba(102, 82, 57, .6)',
    tip: `Redux-First Router does not require you to embed actual links into the page 
            to get the benefit of a synced address bar. Regular actions if matched
            will change the URL. That makes it easy to apply to an existing SPA Redux
            lacking in routing/URLs!`
  },
  {
    youtubeId: 'zBHB9i8e3Kc',
    slug: 'introduction-to-elm',
    title: 'Introduction to Elm',
    by: 'Richard Feldman',
    category: 'Functional Programming',
    categorySlug: 'fp',
    color: 'rgb(102, 82, 57)',
    titleColor: 'rgba(102, 82, 57, .6)',
    tip: `Redux reducers programmatically allow you to produce any state you need.
          So logically Route Matching components such as in React Reacter only
          allow you to do LESS, but with a MORE complicated API.`
  },
  {
    youtubeId: 'mty0RwkPmE8',
    slug: 'next-five-years-of-clojurescript',
    title: 'The Next Five Years of ClojureScript ',
    by: 'David Nolen',
    category: 'Functional Programming',
    categorySlug: 'fp',
    color: 'rgb(102, 82, 57)',
    titleColor: 'rgba(102, 82, 57, .6)',
    tip: `In your actions.meta.location key passed to your reducers you have all sorts
          of information: the previous route, its type and payload, history, whether
          the browser back/next buttons were used and if the action was dispatched on load.
          Check the "kind" key.`
  },
  {
    youtubeId: 'qa72q70gAb4',
    slug: 'unraveling-navigation-in-react-native',
    title: 'Unraveling Navigation in React Native',
    by: 'Adam Miskiewicz',
    category: 'React & Redux',
    categorySlug: 'react-redux',
    color: 'rgb(253, 203, 140)',
    titleColor: 'rgba(253, 203, 140, .6)',
    tip: `Redux-First Router tries in all cases to mirror the Redux API. There is no need
          to pass your thunk :params such as in an express request or the like. Just grab it
          from the payload stored in the location state.`
  },
  {
    youtubeId: 'zD_judE-bXk',
    slug: 'recomposing-your-react-application',
    title: 'Recomposing your React application at react-europe ',
    by: 'Andrew Clark',
    category: 'React & Redux',
    categorySlug: 'react-redux',
    color: 'rgb(253, 203, 140)',
    titleColor: 'rgba(253, 203, 140, .6)',
    tip: `Redux-First Router requires your payload to be objects, as its keys are directionally extracted
          and from your URLs and passed from payloads to URL path segments. Your free
          to use whatever payload you like for redux actions not connected to your routes. Not all
          actions need to be connected to routes.`
  },
  {
    youtubeId: 'uvAXVMwHJXU',
    slug: 'the-redux-journey',
    title: 'The Redux Journey',
    by: 'Dan Abramov',
    category: 'React & Redux',
    categorySlug: 'react-redux',
    color: 'rgb(253, 203, 140)',
    titleColor: 'rgba(253, 203, 140, .6)',
    tip: `The <Link /> component embeds paths in hrefs for SEO, but you don't need to use it
          to get the benefits of a changing address bar. Actions that match routes will
          trigger the corresponding URL even if you dispatch them directly.`
  },
  {
    youtubeId: 'fU9hR3kiOK0',
    slug: 'turning-the-db-inside-out',
    title: 'Turning the database inside out',
    by: 'Martin Kleppmann',
    category: 'Database & GraphQL',
    categorySlug: 'db-graphql',
    color: 'rgb(87, 157, 213)',
    titleColor: 'rgba(87, 157, 213, .6)',
    tip: `The 'thunk' feature is optional, but very useful. Using our 'thunk' feature allows you
          to define it in one place while linking to the route from many places without
          worrying about getting the data first. It's also very easy to handle server-side.`
  },
  {
    youtubeId: '_5VShOmnfQ0',
    slug: 'normalized-caching-in-apollo-ios',
    title: 'Normalized Caching in Apollo iOS',
    by: 'Martijn Walraven',
    category: 'Database & GraphQL',
    categorySlug: 'db-graphql',
    color: 'rgb(87, 157, 213)',
    titleColor: 'rgba(87, 157, 213, .6)',
    tip: `Structure your reducers so that less actions are used to trigger the same state. 
          Your actions will become more 'page-like'. As a result your reducers
          will need to do more "tear down" work when leaving corresponding pages. It's also
          recommended to set action types as the capitalized noun name of the page.`
  },
  {
    youtubeId: 'm-hre1tt9C4',
    slug: 'first-thoughts-on-apollo-and-graphql',
    title: 'First Thoughts On Apollo and GraphQL',
    by: 'Sacha Greif',
    category: 'Database & GraphQL',
    categorySlug: 'db-graphql',
    color: 'rgb(87, 157, 213)',
    titleColor: 'rgba(87, 157, 213, .6)',
    tip: `Using a hash of slugs within one of your reducers is the recommended approach to 
          maintain a normalized set of entities to get the benefits of SEO. This is as opposed
          to using IDs. Refrain from using normalizr or Apollo until your app justifies it.`
  }
]

export const videosByCategory = videos.reduce((hash, video) => {
  hash[video.categorySlug] = hash[video.categorySlug] || []
  hash[video.categorySlug].push(video)
  return hash
}, {})

export const videosHash = videos.reduce((hash, video) => {
  hash[video.slug] = video
  return hash
}, {})
