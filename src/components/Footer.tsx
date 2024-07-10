interface FooterLinksData {
  id: number;
  label: string;
}
interface FooterInfo {
  id: number;
  title: string;
  desc: string;
}
const footerLinksData: FooterLinksData[] = [
  { id: 1, label: 'about us' },
  { id: 2, label: 'portfolio' },
  { id: 3, label: 'news' },
  { id: 4, label: 'stories' },
  { id: 5, label: 'jobs' },
];

const footerInfo: FooterInfo[] = [
  {
    id: 1,
    title: 'Cambridge',
    desc: '70728 Yost Burg, North Magdaleneview, UT 97952-2814',
  },
  {
    id: 2,
    title: 'London',
    desc: 'Suite 292 903 Stehr Streets, Langworthtown, SC 94577-9465',
  },
  {
    id: 3,
    title: 'San Francisco',
    desc: '19837 Gilberto Lodge, Lake Kendallville, Colorado - 97392, Bhutan',
  },
];
const Footer = () => {
  return (
    <footer className=' padding-x padding-y flex flex-col sm:flex-row justify-around gap-7 bg-secondary h-[70vh]'>
      <div className=' flex flex-col justify-between w-[40%]'>
        <h3 className=' text-2xl'>
          Experience remarkable WordPress products with a new level of power,
          beauty, and human-centered designs.
        </h3>
        <div className=' text-sm flex flex-col gap-3'>
          <span className=' text-sm text-gray-500'>
            ©2024 Terms of Use Privacy Policy
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur non officiis labore, natus sit a ex. Error labore
            libero quia placeat deleniti at, quae porro omnis totam modi eaque
            voluptate?
          </p>
        </div>
      </div>

      <div className=' flex flex-col gap-5 w-[20%]'>
        <h4 className=' text-gray-500 text-ellipsis'>Jump to</h4>
        <ul className=' flex flex-col gap-4'>
          {footerLinksData?.map((data) => (
            <li
              key={data.id}
              className=' text-blue-600 capitalize font-semibold'
            >
              {data.label}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-[40%]'>
        {footerInfo?.map((data) => (
          <div key={data.id} className=' flex flex-col gap-3'>
            <h1 className=' text-2xl font-semibold'>{data.title}</h1>
            <p className=' text-gray-700 text-md'>{data.desc}</p>
            <div className=' w-full h-[2px] bg-gray-700'></div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
