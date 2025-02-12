import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Francesco Vurchio is a junior software engineer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Francesco Vurchio, junior developer, software engineer, web developer, frontend developer"
      />
      <meta property="og:title" content="Francesco Vurchio's Portfolio" />
      <meta
        property="og:description"
        content="A junior software developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://francesco-vscode.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Francesco Vurchio',
};
