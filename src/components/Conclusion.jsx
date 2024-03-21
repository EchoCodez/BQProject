import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Conclusion = () => {
	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
			variants={slideIn("left", "tween", 0.2, 1)}
			className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
			<h3 className={`${styles.sectionHeadText} text-[#219E9F]`}>Conclusion</h3>
			<p className={styles.sectionSubText}>
			The pain that comes from death is unmatched, but euthanasia makes the process more ethical for everyone, whether it be the patient that can die happily or the family that can say goodbye. If pets can be put down to save them from suffering, humans should have the same luxury and be able to die happily with no concerns.
			</p>
			<br/>
			<p className={styles.sectionSubText}>
				While doctors do all they can to help in a person's last moments, it is rarely enough to end the suffering. Euthanasia is ethical because it is the only reliable way to end a patient's suffering.
			</p>
			<br/>
			<p className={styles.sectionSubText}>
				Euthanasia is a quick and planned way to preserve dignity in death. Would you rather rip a Band-Aid off at a measured time, or slowly peel it every day, never knowing when the end will come? 
			</p>
			</motion.div>

			<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
			<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Conclusion, "conclusion");
