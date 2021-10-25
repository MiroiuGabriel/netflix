import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqsData.map(({ id, header, body }) => (
				<Accordion.Item key={id}>
					<Accordion.Header>{header}</Accordion.Header>
					<Accordion.Body>{body}</Accordion.Body>
				</Accordion.Item>
			))}
			<OptForm>
				<OptForm.Input placeholder="Email address" />
				<OptForm.Break />
				<OptForm.Button>Try it now</OptForm.Button>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your
					membership
				</OptForm.Text>
			</OptForm>
		</Accordion>
	);
}
