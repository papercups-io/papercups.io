import Layout from './layout';

export const Prose = ({title, width, children}) => (
  <Layout title={title} width={width}>
    <article className="prose lg:prose-xl">{children}</article>
  </Layout>
);

export default Prose;
