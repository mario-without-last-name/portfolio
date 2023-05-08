// where we will connect Sanity client with React application

// import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// In the terminal, at "backend_sanity" folder, type "sanity manange"
export const client = createClient({
  // projectId: 'xsg5s2wa',
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  // token: 'skXbyaq45XSVh8v41B7OayeB1QtUCecsWDuPE3fmPU66GeXi8suR30ZgbMQbOPneF7uOehK5KoYslto0MT9r0UpZvGRwzkevBDU0mCyyLiKW1oVswRFoyyrGa4XBz2CzRAjDHkWJ4YE7GdGMf8uUUzsuKmpHpoJD6f8cjxKUXFaHVRtDpaLk',
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);