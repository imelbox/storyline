import { Select, SelectField } from '@chakra-ui/select';
import { mdiTranslate } from '@mdi/js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Counter from '../components/Counter';
import Icon from '../components/Icon';
import ChangeLanguage from '../components/ChangeLanguage';

export const getServerSideProps = async ({ locale }) => ({
	props: {
		locale,
		...(await serverSideTranslations(locale, ['common']))
	}
});

export default function IndexPage(props) {
	return (
		<div className="page bg-gray-200">
			<h1 className="text-center font-extrabold text-lg">Index</h1>
			<p>This is the index page.</p>
			<p>
				It is a good place to put a short description of your project.{' '}
				{props.locale}
			</p>
			<hr />
			<Counter />
			<div>
				<ChangeLanguage />
			</div>
		</div>
	);
}
