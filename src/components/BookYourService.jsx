

const BookYourService = ({ rounded }) => {
  return (
    <section className="bg-purple px-3">
      <div className="max-w-[565px] m-auto text-center py-25 xl:py-[178px]">
        <p
          data-aos="fade-up"
          className="text-3xl lg:text-5xl leading-[120%] text-white"
        >
          Ready to book your Man & Van Service ?
        </p>
          <button
            data-aos="fade-down"
            className={` ${rounded} cursor-pointer bg-orange py-4 px-8 lg:px-16 text-white mt-6`}
          >
            <a href="#">Get Instant Quote Now</a>
          </button>
      </div>
    </section>
  );
};

export default BookYourService;
