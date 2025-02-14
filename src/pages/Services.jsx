import React from "react";

const Services = () => {
  return (
    <>
      <div className="relative h-screen flex justify-center w-screen">
        <div className="flex flex-col max-w-full justify-center items-center">
          <div className="w-3/6 tracking-wide flex pb-[9vh] flex-col items-center">
            <h2 className="text-[#496CF6] pb-1 font-bold">What I Offer?</h2>
            <h1 className="text-5xl pb-4 font-bold text-black">My Services</h1>
            <p className="font-medium text-center opacity-50">
              Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestias non corrupti esse totam quas quidem
              eius impedit! Officiis, adipisci vel! consectetur adipisicing
              elit. Voluptate, vero? Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
              {/* Service Box 1 */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#1C4ED8] hover:text-white transition duration-300">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg
                    width="35"
                    height="33"
                    viewBox="0 0 35 33"
                    className="m-5"
                  >
                    <path d="M22.8335 14.0001C27.0002 14.0001 30.3335 17.3334 30.3335 21.5001C30.3335 22.9668 29.9168 24.3501 29.1835 25.5001L34.3168 30.6668L32.0002 32.9834L26.8002 27.8668C25.6502 28.5834 24.2835 29.0001 22.8335 29.0001C18.6668 29.0001 15.3335 25.6668 15.3335 21.5001C15.3335 17.3334 18.6668 14.0001 22.8335 14.0001ZM22.8335 17.3334C21.7284 17.3334 20.6686 17.7724 19.8872 18.5538C19.1058 19.3352 18.6668 20.395 18.6668 21.5001C18.6668 22.6052 19.1058 23.665 19.8872 24.4464C20.6686 25.2278 21.7284 25.6668 22.8335 25.6668C23.9386 25.6668 24.9984 25.2278 25.7798 24.4464C26.5612 23.665 27.0002 22.6052 27.0002 21.5001C27.0002 20.395 26.5612 19.3352 25.7798 18.5538C24.9984 17.7724 23.9386 17.3334 22.8335 17.3334ZM13.6668 0.666748C15.4349 0.666748 17.1306 1.36913 18.3809 2.61937C19.6311 3.86961 20.3335 5.56531 20.3335 7.33342C20.3335 8.85008 19.8168 10.2501 18.9668 11.3834C17.5335 11.9167 16.2502 12.7667 15.1835 13.8334L13.6668 14.0001C11.8987 14.0001 10.203 13.2977 8.95278 12.0475C7.70254 10.7972 7.00016 9.10153 7.00016 7.33342C7.00016 5.56531 7.70254 3.86961 8.95278 2.61937C10.203 1.36913 11.8987 0.666748 13.6668 0.666748ZM0.333496 27.3334V24.0001C0.333496 20.4668 5.85016 17.5667 12.8335 17.3334C12.3002 18.6334 12.0002 20.0334 12.0002 21.5001C12.0002 23.6501 12.6335 25.6668 13.6668 27.3334H0.333496Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">User Research</h3>
                <p className="opacity-50 text-center">
                  Description of service 1 goes here. Briefly explain what this
                  service offers.
                </p>
              </div>

              {/* Service Box 2 */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#1C4ED8] hover:text-white transition duration-300">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    className="m-5"
                  >
                    <path d="M18.6668 28.6666C18.6668 28.1666 18.6668 27.4999 18.8335 26.9999H10.3335V23.6666H7.00016V10.3333H10.3335V6.99992H23.6668V10.3333H27.0002V18.8333C27.5002 18.6666 28.1668 18.6666 28.6668 18.6666C29.1668 18.6666 29.8335 18.6666 30.3335 18.8333V10.3333H33.6668V0.333252H23.6668V3.66659H10.3335V0.333252H0.333496V10.3333H3.66683V23.6666H0.333496V33.6666H10.3335V30.3333H18.8335C18.6668 29.8333 18.6668 29.1666 18.6668 28.6666ZM27.0002 3.66659H30.3335V6.99992H27.0002V3.66659ZM3.66683 3.66659H7.00016V6.99992H3.66683V3.66659ZM7.00016 30.3333H3.66683V26.9999H7.00016V30.3333ZM30.3335 21.9999V26.9999H35.3335V30.3333H30.3335V35.3333H27.0002V30.3333H22.0002V26.9999H27.0002V21.9999H30.3335Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Visual Design</h3>
                <p className="opacity-50 text-center">
                  Description of service 1 goes here. Briefly explain what this
                  service offers.
                </p>
              </div>

              {/* Service Box 3 */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#1C4ED8] hover:text-white transition duration-300">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg
                    width="40"
                    height="25"
                    viewBox="0 0 40 25"
                    className="m-4"
                  >
                    <path d="M20 0.166748C21.5471 0.166748 23.0308 0.78133 24.1248 1.87529C25.2188 2.96925 25.8333 4.45298 25.8333 6.00008C25.8333 7.54718 25.2188 9.03091 24.1248 10.1249C23.0308 11.2188 21.5471 11.8334 20 11.8334C18.4529 11.8334 16.9692 11.2188 15.8752 10.1249C14.7812 9.03091 14.1667 7.54718 14.1667 6.00008C14.1667 4.45298 14.7812 2.96925 15.8752 1.87529C16.9692 0.78133 18.4529 0.166748 20 0.166748ZM8.33333 4.33341C9.26667 4.33341 10.1333 4.58341 10.8833 5.03341C10.6333 7.41675 11.3333 9.78341 12.7667 11.6334C11.9333 13.2334 10.2667 14.3334 8.33333 14.3334C7.00725 14.3334 5.73548 13.8066 4.7978 12.8689C3.86012 11.9313 3.33333 10.6595 3.33333 9.33341C3.33333 8.00733 3.86012 6.73556 4.7978 5.79788C5.73548 4.8602 7.00725 4.33341 8.33333 4.33341ZM31.6667 4.33341C32.9927 4.33341 34.2645 4.8602 35.2022 5.79788C36.1399 6.73556 36.6667 8.00733 36.6667 9.33341C36.6667 10.6595 36.1399 11.9313 35.2022 12.8689C34.2645 13.8066 32.9927 14.3334 31.6667 14.3334C29.7333 14.3334 28.0667 13.2334 27.2333 11.6334C28.6667 9.78341 29.3667 7.41675 29.1167 5.03341C29.8667 4.58341 30.7333 4.33341 31.6667 4.33341ZM9.16667 21.4167C9.16667 17.9667 14.0167 15.1667 20 15.1667C25.9833 15.1667 30.8333 17.9667 30.8333 21.4167V24.3334H9.16667V21.4167ZM0 24.3334V21.8334C0 19.5167 3.15 17.5667 7.41667 17.0001C6.43333 18.1334 5.83333 19.7001 5.83333 21.4167V24.3334H0ZM40 24.3334H34.1667V21.4167C34.1667 19.7001 33.5667 18.1334 32.5833 17.0001C36.85 17.5667 40 19.5167 40 21.8334V24.3334Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">User Testing</h3>
                <p className="opacity-50 text-center">
                  Description of service 2 goes here. Briefly explain what this
                  service offers.
                </p>
              </div>

              {/* Service Box 4 */}
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#1C4ED8] hover:text-white transition duration-300">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    className="m-5"
                  >
                    <path d="M16.6667 0V13.3333H30V0H16.6667ZM0 30H13.3333V16.6667H0V30ZM0 0V13.3333H13.3333V0H0ZM16.6667 21.6667H21.6667V16.6667H25V21.6667H30V25H25V30H21.6667V25H16.6667V21.6667Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Prototype</h3>
                <p className="opacity-50 text-center">
                  Description of service 3 goes here. Briefly explain what this
                  service offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
