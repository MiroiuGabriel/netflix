import { Container, Title, SubTitle, Inner } from './styles/feature';

export default function Feature({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
