import Box from 'components/Box';
import Layout from 'modules/Loja/Components/Layout';
import { Oval } from '@agney/react-loading';

export default function LoadingScreen() {
  return (
    <Layout>
      <Box alignItems="center" display="flex" justifyContent="center" minHeight="90vh" style={{ color: '#099a35' }}>
        <Oval width={50} />
      </Box>
    </Layout>
  );
}
