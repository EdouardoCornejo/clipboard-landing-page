import {
  Devices,
  DownloadBtn,
  Features,
  Header,
  InfoSection,
  Logos,
  PageLayout,
  Section,
} from './components';

function App() {
  return (
    <PageLayout>
      <Header />
      <DownloadBtn />
      <Section
        title="Keep track of your snippets"
        content="Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything."
      />
      <Features />
      <Section
        title="Access Clipboard Anywhere"
        content="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
      />
      <Devices />
      <Section
        title="Supercharge your workflow"
        content="We’ve got the tools to boost your productivity."
      />
      <InfoSection />
      <Logos />
      <Section
        title="Clipboard for iOS and Mac OS"
        content="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard."
      />
      <DownloadBtn />
    </PageLayout>
  );
}

export default App;
