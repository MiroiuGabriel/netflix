import { Accordion } from '../components';
import { Item } from '../components/jumbotron/styles/jumbotron';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqsData.map(({ id, header, body }) => (
				<Accordion.Item key={id}>
					<Accordion.Header>{header}</Accordion.Header>
					<Accordion.Body>{body}</Accordion.Body>
				</Accordion.Item>
			))}
			<Accordion.Item />
		</Accordion>
	);
}
