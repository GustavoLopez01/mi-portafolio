

const Profile = () => {
  return (
    <div className="">
      <div class="h-screen flex justify-center items-center bg-[url('https://i.ibb.co/9Y3qDsn/content.png')]">
        <Gus/>
      </div>
    </div>
  );
};

const Gus = () => {
  return (
    <div className="">
      <div className="rounded overflow-hidden md:max-w-2xl">
        <div className="md:flex text-white">
          <div className="md:shrink-0">
            <div className="flex flex-nowrap justify-center items-center">
            <img
              className="h-48 md:h-42 rounded-full"
              src="https://avatars.githubusercontent.com/u/120607477?v=4"
              alt="Modern building architecture"
            />
            </div>
          </div>
          <div className="p-8 md:text-left sm:text-center">
            <div className="uppercase tracking-wide text-sm text-white font-semibold">
              Hola yo soy Gustavo López
            </div>
            Incredible accomodation for your team
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile, Gus };
