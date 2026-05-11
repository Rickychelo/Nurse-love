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
    caption: "Eres mi presente favorito y mi futuro soñado ✨",
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
    caption: "Te elijo hoy, mañana y siempre ✨",
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
    caption:
      "Nunca olvides lo increíble que eres ❤️",
  },
];

export default function PremiumGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState({});

  return (
    <section className="relative z-10 py-24 px-6 overflow-hidden">

      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <p className="uppercase tracking-[0.4em] text-pink-300 text-xs md:text-sm mb-6">
          Galería de recuerdos
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Nuestros recuerdos 📸
        </h2>
      </motion.div>

      {/* GALERIA */}
      <div className="max-w-7xl mx-auto">

        <Swiper
          spaceBetween={30}
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
                  y: -8,
                }}
                transition={{ duration: 0.4 }}
                className="
                  relative
                  group
                  overflow-hidden
                  rounded-3xl
                  cursor-pointer
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                "
                onClick={() => setSelectedImage(photo)}
              >

                {/* IMAGEN */}
                <div className="relative overflow-hidden">

                  {!loaded[index] && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse z-0" />
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
                      w-full
                      h-[500px]
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                      ${
                        loaded[index]
                          ? "opacity-100 blur-0"
                          : "opacity-40 blur-xl"
                      }
                    `}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* TEXTO */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">

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
                        text-lg
                        md:text-2xl
                        font-medium
                        leading-relaxed
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

      {/* MODAL */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/90
              backdrop-blur-xl
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
              className="relative max-w-5xl w-full"
            >

              {/* BOTON */}
              <button
                className="
                  absolute
                  top-4
                  right-4
                  z-50
                  w-12
                  h-12
                  rounded-full
                  bg-white/20
                  text-white
                  text-2xl
                "
              >
                ✕
              </button>

              {/* FOTO */}
              <img
                src={selectedImage.image}
                alt=""
                className="
                  w-full
                  max-h-[85vh]
                  object-contain
                  rounded-3xl
                "
              />

              {/* TEXTO */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent rounded-b-3xl">

                <p className="text-white text-xl md:text-3xl text-center font-medium">
                  {selectedImage.caption}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}