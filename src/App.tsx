import {
  DownloadBtn,
  Features,
  Header,
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
        title="Keep track of your snippets"
        content="Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything."
      />
    </PageLayout>
  );
}

export default App;
