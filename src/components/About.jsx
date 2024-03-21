import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
	return (
	<>
		<motion.div variants={textVariant()}>
			<h1 className={`${styles.thingHeadText} text-white pt-10 pb-3`}>
				<span className='text-[#319E9F]'>Is Euthanasia Ethical?</span>
			</h1>
		</motion.div>

		<motion.p
		variants={fadeIn("", "", 0.1, 1)}
		className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
		>
			Euthanasia is ethical because it reduces healthcare costs for the family, it allows the individual more agency in their death, and it is already the societal expectation and common practice for pets.
		</motion.p>
		<motion.p
		variants={fadeIn("", "", 0.1, 1)}
		className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
		>
			Funds don’t have to be used, especially when all they do is prolong the issue and cause more suffering.
The individual should be allowed to die on their own terms, giving them the chance to be around their friends and family.
The dignity in death that comes with euthanasia is already given to pets, so humans shouldn’t be treated any differently.
While pain relief has come a long way, it is still nowhere near effective enough to stop suffering entirely when nearing death.

		</motion.p>

	</>
	);
};

export default SectionWrapper(About, "about");
