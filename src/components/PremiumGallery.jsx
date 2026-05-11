
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";

const photos = [
  {
    image: "/photos/1.JPG",
    caption: "Cada momento contigo es especial ❤️",
  },
  {
    image: "/photos/2.JPG",
    caption: "Eres mi presente favorito y mi futuro soñado. ✨",
  },
  {
    image: "/photos/3.JPG",
    caption: "Siempre iluminas mis días 🌸",
  },
  {
    image: "/photos/4.jpeg",
    caption: "Nuestra historia es hermosa 💖",
  },
  {
    image: "/photos/5.JPG",
    caption: "Gracias por tantos recuerdos ❤️",
  },
  {
    image: "/photos/6.JPG",
    caption: "Amo cada instante contigo ✨",
  },
  {
    image: "/photos/7.JPG",
    caption: "Tu sonrisa cambia mi mundo 😊",
  },
  {
    image: "/photos/8.JPG",
    caption: "Siempre quiero caminar a tu lado 🌙",
  },
  {
    image: "/photos/9.JPG",
    caption: "Mi lugar favorito siempre será contigo ❤️",
  },
  {
    image: "/photos/10.JPG",
    caption: "Cada foto guarda un recuerdo hermoso 📸",
  },
  {
    image: "/photos/11.JPG",
    caption: "Eres una persona increíble ✨",
  },
  {
    image: "/photos/12.JPG",
    caption: "Eres mi mejor casualidad 💖",
  },
  {
    image: "/photos/13.jpeg",
    caption: "Tus ojos tienen algo mágico 🌸",
  },
  {
    image: "/photos/14.jpeg",
    caption: "Cada día contigo vale oro ❤️",
  },
  {
    image: "/photos/15.jpeg",
    caption: "Te elijo hoy, mañana y siempre. ✨",
  },
  {
    image: "/photos/16.jpeg",
    caption: "Contigo todo se siente mejor 💕",
  },
  {
    image: "/photos/17.jpg",
    caption: "Eres mi paz y mi felicidad 🌙",
  },
  {
    image: "/photos/18.jpeg",
    caption: "Nunca dejaré de admirarte ❤️",
  },
  {
    image: "/photos/19.jpeg",
    caption: "Gracias por tantos momentos inolvidables ✨",
  },
  {
    image: "/photos/20.JPG",
    caption: "Te amo muchísimo 💖",
  },
    {
    image: "/photos/21.JPG",
    caption: "Nunca olvides lo increíble que eres: una enfermera admirable, una mujer maravillosa y una persona capaz de iluminar la vida de quienes te rodean ❤️",
  },
];

export default function PremiumGallery() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState({});

  return (
    <section className="relative z-10 py-44 px-6 overflow-hidden">

      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >

        <p
          className="
            uppercase
            tracking-[0.4em]
            text-pink-300
            text-xs
            md:text-sm
            mb-6
          "
        >
          Galería de recuerdos
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Nuestros recuerdos 📸
        </h2>

      </motion.div>

      {/* SWIPER */}
      <div className="max-w-7xl mx-auto">

        <Swiper
          spaceBetween={35}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {photos.map((photo, index) => (

            <SwiperSlide key={index}>

              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  relative
                  group
                  overflow-hidden
                  rounded-4xl
                  cursor-pointer
                  bg-white/3
                  border border-white/5
                  backdrop-blur-3xl
                  shadow-[0_0_60px_rgba(255,255,255,0.04)]
                "
                onClick={() => setSelectedImage(photo)}
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-b
                    from-pink-500/0
                    to-fuchsia-500/10
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    z-10
                  "
                />

                {/* IMAGE CONTAINER */}
                <div className="relative overflow-hidden">

                  {/* BLUR LOADING */}
                  {!loaded[index] && (

                    <div
                      className="
                        absolute
                        inset-0
                        bg-white/10
                        animate-pulse
                        blur-2xl
                        z-0
                      "
                    />

                  )}

                  <img
                    src={photo.image}
                    alt=""
                    loading="lazy"
                    onLoad={() =>
                      setLoaded((prev) => ({
                        ...prev,
                        [index]: true,
                      }))
                    }
                    className={`
                      h-130
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                      ${
                        loaded[index]
                          ? "blur-0 opacity-100 scale-100"
                          : "blur-2xl opacity-40 scale-110"
                      }
                    `}
                  />

                  {/* CINEMATIC OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-black/90
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* CAPTION */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-7
                      z-20
                    "
                  >

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      text-white
                      text-center
                      text-xl
                      md:text-2xl
                      font-medium
                      leading-relaxed
                      drop-shadow-2xl
                      max-w-[90%]
                      mx-auto
                    "
                  >
                    {photo.caption}
                  </motion.p>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-9999
              bg-black/90
              backdrop-blur-2xl
              flex
              items-center
              justify-center
              p-6
            "
            onClick={() => setSelectedImage(null)}
          >

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                max-w-6xl
                w-full
              "
            >

              {/* CLOSE BUTTON */}
              <button
                className="
                  absolute
                  top-4
                  right-4
                  z-50
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  text-white
                  text-2xl
                  hover:bg-white/20
                  transition-all
                "
              >
                ✕
              </button>

              {/* IMAGE */}
              <img
                src={selectedImage.image}
                alt=""
                className="
                  w-full
                  max-h-[85vh]
                  object-contain
                  rounded-4xl
                  shadow-[0_0_80px_rgba(255,255,255,0.08)]
                "
              />

              {/* MODAL CAPTION */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-8
                  bg-linear-to-t
                  from-black/90
                  to-transparent
                  rounded-b-4xl
                "
              >

                <p
                  className="
                    text-white
                    text-2xl
                    md:text-3xl
                    text-center
                    font-medium
                  "
                >
                  {selectedImage.caption}
                </p>

              </motion.div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}