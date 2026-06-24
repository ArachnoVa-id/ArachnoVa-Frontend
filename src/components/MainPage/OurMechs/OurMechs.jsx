"use client";

import Container from "./Container";
import { useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import FirstTouchPoint from "./FirstTouchPoint";
import ProjectExecution from "./ProjectExecution";
import FutureTouchPoints from "./FutureTouchPoints";
import FinishingProject from "./FinishingProject";
import BorderSeparator from "../BorderSeparator/BorderSeparator";
import Image from "@/components/ui/Img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMechs = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	const [firstTouchPoint, setFirstTouchPoint] = useState(true);
	const [projectExecution, setProjectExecution] = useState(false);
	const [finishingTheProject, setFinishingTheProject] = useState(false);
	const [futureTouchPoints, setFutureTouchPoints] = useState(false);

	const handleFirstTouchPoint = () => {
		setFirstTouchPoint(true);
		setProjectExecution(false);
		setFinishingTheProject(false);
		setFutureTouchPoints(false);

		console.log("First Touch Point Displayed");
	};

	const handleProjectExecution = () => {
		setFirstTouchPoint(false);
		setProjectExecution(true);
		setFinishingTheProject(false);
		setFutureTouchPoints(false);

		console.log("Project Execution Displayed");
	};

	const handleFinishingTheProject = () => {
		setFirstTouchPoint(false);
		setProjectExecution(false);
		setFinishingTheProject(true);
		setFutureTouchPoints(false);

		console.log("Finishing the Project Displayed");
	};

	const handleFutureTouchPoints = () => {
		setFirstTouchPoint(false);
		setProjectExecution(false);
		setFinishingTheProject(false);
		setFutureTouchPoints(true);

		console.log("Future Touch Points Displayed");
	};
	return (
		<section className="relative flex flex-col w-full lg:aspect-[1920/1147] max-lg:aspect-[430/3808] justify-center items-center bg-white-MainPage  overflow-hidden">
			<div className="w-[50rem] h-[50rem] hidden lg:flex flex-col gap-y-[3.0rem]">
				<div data-aos="fade-up" className="w-[40.87rem] flex flex-col">
					<p className="font-SourceSansProBold text-[1.5rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
						Simple Steps, Remarkable Solutions
					</p>
					<h1 className="font-SourceSansProBold text-[2.63rem] text-neutral-g leading-[2.25rem] mt-[0.75rem]">
						How Our Mechanism Can <br /> Help You Build Your Dream Website
					</h1>
					<p className="font-SourceSansProSemibold text-[1.5rem] text-neutral-e mt-[1.5rem]">
						Anda dapat membangun situs web impian Anda dengan mekanisme kami
						yang sederhana dan efektif. Dengan beberapa langkah tersebut, Kami
						akan mengeksekusi projects Anda secara detail dan tepat sesuai
						kebutuhan yang diinginkan.
					</p>
				</div>
				<div
					data-aos="fade-up"
					className="w-full flex flex-row justify-between"
				>
					<div className="w-fit flex flex-col">
						<Container
							Title="First Touch Point"
							Description="Tahapan awal untuk memulai proses kolaborasi  dengan melakukan identifikasi kebutuhan dan tujuan."
							Icon={
								<>
									<div className="relative w-[2.88rem] aspect-[21/17]">
										<Image
											src="/image/OurMechs/icon-1.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
							State={firstTouchPoint}
							Clicked={handleFirstTouchPoint}
						/>
						<Container
							Title="Project Execution"
							Description="Tata cara eksekusi dan proses produksi dalam progres pengerjaan projects secara berkala. "
							Icon={
								<>
									<div className="relative w-[2.25rem] aspect-[1/1]">
										<Image
											src="/image/OurMechs/icon-2.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
							State={projectExecution}
							Clicked={handleProjectExecution}
						/>
						<Container
							Title="Finishing the Project"
							Description="Masa penyelesaian projects dan perjanjian akhir serta diskusi pemeliharaan berkelanjutan"
							Icon={
								<>
									<div className="relative w-[2.25rem] aspect-[1/1]">
										<Image
											src="/image/OurMechs/icon-3.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
							State={finishingTheProject}
							Clicked={handleFinishingTheProject}
						/>
						<Container
							Title="Future Touch Points"
							Description="Layanan yang kami tawarkan setelah masa pengerjaan projects telah usai "
							Icon={
								<>
									<div className="relative w-[2.25rem] aspect-[1/1]">
										<Image
											src="/image/OurMechs/icon-4.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
							State={futureTouchPoints}
							Clicked={handleFutureTouchPoints}
						/>
					</div>
					<>
						{firstTouchPoint ? (
							<>
								<FirstTouchPoint />
							</>
						) : (
							""
						)}
						{projectExecution ? (
							<>
								<ProjectExecution />
							</>
						) : (
							""
						)}
						{finishingTheProject ? (
							<>
								<FinishingProject />
							</>
						) : (
							""
						)}
						{futureTouchPoints ? (
							<>
								<FutureTouchPoints />
							</>
						) : (
							""
						)}
					</>
				</div>
			</div>
			{/* Mobile Version */}
			<div className="w-fit h-fit flex items-center flex-col lg:hidden gap-y-[20.09rem]">
				<div
					data-aos="fade-up"
					className="w-[50rem] lg:hidden flex flex-col gap-y-[2.68rem]"
				>
					<p className="font-SourceSansProBold text-[6.03rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
						Simple Steps, Remarkable Solutions
					</p>
					<h1 className="font-SourceSansProBold text-[8rem] text-neutral-g leading-[10.05rem] mt-[0.75rem]">
						How Our Mechanism Can <br /> Help You Build Your Dream Website
					</h1>
					<p className="font-SourceSansProSemibold text-[6.03rem] text-neutral-e mt-[1.5rem]">
						Dengan ArachnoVa, Anda dapat membangun situs web impian Anda.
						Mekanisme kami sederhana dan efektif, Anda memberi tahu kami apa
						yang Anda inginkan, dan kami mewujudkannya
					</p>
				</div>
				<div className="flex flex-col w-fit h-[50rem] justify-between items-center">
					<div
						data-aos="fade-up"
						className="relative flex flex-col w-fit h-fit justify-center items-center"
					>
						<div className="w-[50rem] aspect-[621/632] z-[0] absolute -left-[43.2rem] -bottom-[14.4rem]">
							<Image
								src="/image/OurMechs/bg-mobile-left.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<div className="w-[50rem] aspect-[598/600] z-[0] absolute -right-[50rem] top-[7.2rem]">
							<Image
								src="/image/OurMechs/bg-mobile-right.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<Container
							Title="First Touch Point"
							Description="Tahapan awal untuk memulai proses kolaborasi  dengan melakukan identifikasi kebutuhan dan tujuan."
							Icon={
								<>
									<div className="relative w-[9.38rem] aspect-[21/17]">
										<Image
											src="/image/OurMechs/icon-1.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
						/>
						<FirstTouchPoint />
					</div>

					<div
						data-aos="fade-up"
						className="relative flex flex-col w-fit h-fit justify-center items-center"
					>
						<div className="w-[50rem] aspect-[621/632] z-[0] absolute -left-[43.2rem] -bottom-[14.4rem]">
							<Image
								src="/image/OurMechs/bg-mobile-left.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<div className="w-[50rem] aspect-[598/600] z-[0] absolute -right-[50rem] top-[7.2rem]">
							<Image
								src="/image/OurMechs/bg-mobile-right.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<Container
							Title="Project Execution"
							Description="Tata cara eksekusi dan proses produksi dalam progres pengerjaan projects secara berkala.	"
							Icon={
								<>
									<div className="relative w-[9.38rem] aspect-[1/1]">
										<Image
											src="/image/OurMechs/icon-2.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
						/>
						<ProjectExecution />
					</div>

					<div
						data-aos="fade-up"
						className="relative flex flex-col w-fit h-fit justify-center items-center"
					>
						<div className="w-[50rem] aspect-[621/632] z-[0] absolute -left-[43.2rem] -bottom-[14.4rem]">
							<Image
								src="/image/OurMechs/bg-mobile-left.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<div className="w-[50rem] aspect-[598/600] z-[0] absolute -right-[50rem] top-[7.2rem]">
							<Image
								src="/image/OurMechs/bg-mobile-right.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<Container
							Title="Finishing the Project"
							Description="Masa penyelesaian projects dan perjanjian akhir serta diskusi pemeliharaan berkelanjutan."
							Icon={
								<>
									<div className="relative w-[9.38rem] aspect-[1/1]">
										<Image
											src="/image/OurMechs/icon-3.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
						/>
						<FinishingProject />
					</div>

					<div
						data-aos="fade-up"
						className="relative flex flex-col w-fit h-fit justify-center items-center"
					>
						<div className="w-[50rem] aspect-[621/632] z-[0] absolute -left-[43.2rem] -bottom-[14.4rem]">
							<Image
								src="/image/OurMechs/bg-mobile-left.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<div className="w-[50rem] aspect-[598/600] z-[0] absolute -right-[50rem] top-[7.2rem]">
							<Image
								src="/image/OurMechs/bg-mobile-right.png"
								alt="bg"
								draggable="false"
								fill
								className="object-contain"
							/>
						</div>
						<Container
							Title="Future Touch Points"
							Description="Masa penyelesaian projects dan perjanjian akhir serta diskusi pemeliharaan berkelanjutan."
							Icon={
								<>
									<div className="relative w-[8.71rem] aspect-[1/1]">
										<Image
											src="/image/OurMechs/icon-4.png"
											draggable="false"
											alt="icon"
											fill
											className="object-contain"
										/>
									</div>
								</>
							}
						/>
						<FutureTouchPoints />
					</div>
				</div>
			</div>
			<BorderSeparator />
		</section>
	);
};

export default OurMechs;
