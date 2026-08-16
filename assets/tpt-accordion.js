/**
Tpt accordion HTML

<tpt-accordion data-group="true">
	<tpt-accordion-item>
		<tpt-accordion-heading>
			Title accordion example

			<span class="tpt-accordion_caret">
				<svg
				width="10"
				height="16"
				viewBox="0 0 10 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				>
				<path d="M1.66634 14.9998L8.33301 8.33317L1.66634 1.6665" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</span>
		</tpt-accordion-heading>

		<tpt-accordion-data>
			Description accordion example 
		</tpt-accordion-data>
	</tpt-accordion-item>

	<tpt-accordion-item>
		...
	</tpt-accordion-item>
</tpt-accordion>

Accordion style check in: tpt-accordion.css
*/

if (!customElements.get("tpt-accordion-heading")) {
	customElements.define(
		"tpt-accordion-heading",
		class TptAccordionHeading extends HTMLElement {
			constructor() {
				super();

				this.addEventListener("click", this.toggleAccordion.bind(this));
			}

			toggleAccordion() {
				const groupAccordion = this.closest("tpt-accordion");
				const accordionItem = this.closest("tpt-accordion-item");

				if (groupAccordion.getAttribute("data-group") == "true") {
					if (accordionItem.classList.contains("active")) {
						accordionItem.classList.remove("active");
					} else {
						groupAccordion.querySelectorAll("tpt-accordion-item").forEach((item) => {
							item.classList.remove("active");
						});

						accordionItem.classList.add("active");
					}
				} else {
					accordionItem.classList.toggle("active");
				}
			}
		}
	);
}
