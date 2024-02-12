import Intro from '@/components/Intro';
import About from '@/components/About';
import SectionDivider from '@/components/SectionDivider';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "John Hamlin's Portfolio",
  description: 'John Hamlin is a full-stack developer.',
  creator: 'John Hamlin',
  publisher: 'John Hamlin',
  keywords: [
    'John Hamlin',
    'Full-stack Developer',
    'Software Engineer',
    'Raleigh, NC',
    'North Carolina',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'GraphQL',
    'Apollo',
    'Clerk',
    'Vercel',
    'Netlify',
    'AWS',
    'Google Cloud',
    'Firebase',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'Jira',
    'Confluence',
    'Slack',
    'Microsoft Teams',
    'Zoom',
    'Google Meet',
    'Microsoft Teams',
    'Discord',
    'Trello',
    'Asana',
    'Monday.com',
    'Notion',
    'Airtable',
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'Zeplin',
    'Abstract',
    'Miro',
    'Mural',
    'Jamboard',
    'Microsoft Whiteboard',
    'Google Workspace',
    'Microsoft 365',
    'G Suite',
    'Office 365',
    'Google Cloud Platform',
    'Amazon Web Services',
    'Microsoft Azure',
    'Firebase',
    'Netlify',
    'Vercel',
    'Heroku',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'GitHub Actions',
    'GitLab CI/CD',
    'Bitbucket Pipelines',
    'CircleCI',
    'Travis CI',
    'AWS CodePipeline',
    'Azure DevOps',
    'Google Cloud Build',
    'Firebase Hosting',
    'Netlify',
    'Vercel',
    'Heroku',
    'AWS Amplify',
    'Google Cloud Run',
    'Azure App Service',
    'Firebase Cloud Functions',
    'Netlify Functions',
    'Vercel Serverless Functions',
    'Heroku',
    'AWS Lambda',
    'Google Cloud Functions',
    'Azure Functions',
    'Firebase Cloud Firestore',
    'MongoDB Atlas',
    'Amazon DocumentDB',
    'Google Cloud Firestore',
    'Azure Cosmos DB',
    'Firebase Realtime Database',
    'MongoDB Atlas',
    'Amazon DynamoDB',
    'Google Cloud Datastore',
    'Azure Table Storage',
    'Firebase Cloud Storage',
    'Amazon S3',
    'Google Cloud Storage',
    'Azure Blob Storage',
    'Firebase Authentication',
    'Auth0',
    'Okta',
    'AWS Cognito',
    'Google Cloud Identity Platform',
    'Azure Active Directory B2C',
    'Firebase Cloud Messaging',
    'Amazon SNS',
    'Google Cloud Pub/Sub',
    'Azure Service Bus',
    'Firebase Cloud Functions',
    'Amazon Lambda',
    'Google Cloud Functions',
    'Azure Functions',
    'Firebase Cloud Firestore',
    'MongoDB Atlas',
    'Amazon',
  ],
  metadataBase: new URL('https://johnhaml.in'),

  openGraph: {
    title: "John Hamlin's Portfolio",
    description: 'John Hamlin is a full-stack developer in Raleigh, N.C.',
    images: '/opengraph-image.jpg',
    url: 'https://johnhaml.in',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
