import { Suspense } from "react";
import { BackgroundCard } from "./ui/BackgroundCard";
import { GridGlobe2 } from "./ui/GridGlobe";
import ModalPopup from "./ModalPopup";

// function About2() {
//   return (
//     <div>
//       <Canvas id="three-canvas-container" shadows>
//         <Suspense fallback={null}>
//           {/* <PerspectiveCamera makeDefault /> */}
//           <OrbitControls autoRotate={false} />
//           {/* <Drone /> */}
//           <ambientLight color={"white"} intensity={1} />
//           <spotLight />
//           <Car />
//           <ambientLight color={"white"} intensity={1} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

const MyCardProtfolio = () => {
  return (
    <BackgroundCard className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-black-100">
      <img
        src="https://raw.githubusercontent.com/mohammedshahid096/ShahidProtfolio/main/src/images/shahidprofile.jpg"
        alt="Mohammed Shahid"
        height="400"
        width="400"
        className="object-contain"
      />

      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Mohammed Shahid Nagodriya
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        I am a passionate MERN (MongoDB, Express.js, React.js, and Node.js)
        Stack Developer with a strong track record in creating innovative and
        dynamic web applications.
      </p>
      <ModalPopup />
    </BackgroundCard>
  );
};

const About = () => {
  return (
    <>
      <h1 className="heading mb-6" id="about">
        Get to <span className="text-purple">Know Me</span>
      </h1>

      <div className="flex justify-center max-sm:flex-col">
        <Suspense fallback={null}>
          <GridGlobe2 />
        </Suspense>
        <MyCardProtfolio />
      </div>
    </>
  );
};

export default About;
