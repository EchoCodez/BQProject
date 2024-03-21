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
			<h2 className={`${styles.sectionHeadText}`}>Testing</h2>
			</div>

			<div className='w-full flex'>
				<p
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					Euthanaisa prevents health care spending that can be very costly for the families of the one who is dying. Because of these high costs, keeping someone alive when the person has a life-ending condition is not very cost effective, but many people still do it. This supports the fact that euthanasia is ethical because it prevents families from having to pay tens of thousands of dollars for futile efforts that just end up making the process more painful for the patient. Additionally, health insurance companies that profit off of people in the last few years of their lives have an incentive to raise life support and treatment costs, which is not only unethical, but also unfair to those families.
				</p>
				
			</div>
			<div className='w-full flex'>
				<p
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					Ultraviolet (UV) light, or black light, is, at its simplest form, electromagnetic radiation. 
					It is on the very end of the visible light spectrum, and is emitted through sunlight, which 
					is why it causes sunburns and skin cancers. Many scientists suspect that lichen glow under 
					UV light because they release a compound that not only protects them from UV radiation, but 
					also is used for asexual reproduction. This compound fluoresces in a variety of different colors. 
					According to our expert discussion with Bruce McCune, secretary-treasurer of the non-profit 
					Northwest Lichenologists, many lichens glow much stronger under short-wave UV light. However, 
					this type of light is harmful to people's eyes. Long-wave UV light is not as effective, but 
					must be used in our solution for safety purposes.
				</p>
	
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
			{projects.map((project, index) => (
				<ProjectCard key={`project-${index}`} index={index} {...project} />
			))}
			</div>
		</>
	);
};

export default SectionWrapper(Testing, "testing");
