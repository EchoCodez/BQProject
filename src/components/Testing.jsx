import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
}) => {
  return (
		<div>
		<div
			options={{
			max: 45,
			scale: 1,
			speed: 450,
			}}
			className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
		>
			<div className='relative w-full h-[230px]'>
			<img
				src={image}
				alt='project_image'
				className='w-full h-full object-cover rounded-2xl'
			/>
			</div>

			<div className='mt-5'>
			<h3 className='text-white font-bold text-[24px]'>{name}</h3>
			<p className='mt-2 text-secondary text-[14px]'>{description}</p>
			</div>

			<div className='mt-4 flex flex-wrap gap-2'>
			{tags.map((tag) => (
				<p
				key={`${name}-${tag.name}`}
				className={`text-[14px] ${tag.color}`}
				>
				#{tag.name}
				</p>
			))}
			</div>
		</div>
		</div>
	);
};

const Testing = () => {
	return (
		<>
		
			<div>
			<h2 className={`${styles.sectionHeadText}`}>Argument</h2>
			</div>

			<div className='mt-4 mb-12 flex flex-wrap gap-7'>
			{projects.map((project, index) => (
				<ProjectCard key={`project-${index}`} index={index} {...project} />
			))}
			</div>

			<div>
			<h2 className={`${styles.sectionHeadText}`}>Counter</h2>
			</div>

			
			<div className='w-full flex'>
				<p
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					While some say pain management is good enough to eliminate need for euthanasia, this is not true: A recent report from Dignity in Dying finds that palliative care can often be ineffective:  “More than four in ten healthcare professionals (43% out of 1,008 asked) have experience of caring for someone who has suffered at the end of life despite receiving high quality palliative care” (Riley and Hehir). Because there is still a lot of suffering for the patient, it is more ethical to let the patient die on their own terms and end the pain. Even those who do get pain management have to live in a hospital away from loved ones, which can be mentally debilitating.
				</p>
				
			</div>

			
		</>
	);
};

export default SectionWrapper(Testing, "testing");
