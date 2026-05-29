import Particles from "react-tsparticles";

function ParticlesBackground() {

  return (

    <Particles

      options={{

        background: {

          color: {

            value: "transparent",

          },

        },

        fpsLimit: 60,

        particles: {

          number: {

            value: 60,

          },

          color: {

            value: "#00ffff",

          },

          links: {

            enable: true,

            color: "#00ffff",

            distance: 150,

            opacity: 0.2,

          },

          move: {

            enable: true,

            speed: 1.5,

          },

          opacity: {

            value: 0.4,

          },

          size: {

            value: 3,

          },

        },

      }}

      className="particles-bg"

    />

  );

}

export default ParticlesBackground;