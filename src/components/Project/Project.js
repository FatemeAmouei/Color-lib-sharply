import './Project.css'
import '../default/default.css'
import ProjectModal from '../ProjectModal/ProjectModal';
import React, { useState } from 'react';

function Project(){
  const [isShowDetailMoreModal, setisShowDetailMoreModal] = useState(false);
  const [mainProjectInfos, setMainProjectInfos] = useState({});

  const CloseModalMoreDetails = () => setisShowDetailMoreModal(false);

  const moreDetails = (info) => {
    setMainProjectInfos(info);
    setisShowDetailMoreModal(true);
  }

  const ProjectItems = [
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1-1024x714.jpg",
      title: "Project #15",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1-1024x714.jpg",
      title: "Project #14",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447834353189-91c48abf20e1-1-1-1024x728.jpg",
      title: "Project #13",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1-1024x728.jpg",
      title: "Project #12",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg",
      title: "Project #11",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1430329429612-babb42f88673-1-1-1024x714.jpg",
      title: "Project #10",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449057528837-7ca097b3520c-1-1-1024x728.jpg",
      title: "Project #9",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449168013943-3a15804bb41c-1-1-1024x714.jpg",
      title: "Project #8",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451186859696-371d9477be93-1-1-1024x714.jpg",
      title: "Project #7",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },   
    {
      img: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1448518184296-a22facb4446f-1-1-1024x714.jpg",
      title: "Project #6",
      text:'tiam justo diam, maximus in nisi non, maximus lobortis leo. Curabitur placerat augue velit, id ultrices elit auctor eu. Vivamus volutpat augue mauris, sit amet euismod ligula imperdiet a. Proin urna nisl, vehicula a tristique id, ornare et nibh. Integer lacinia libero quis nibh cursus, at aliquet nunc pulvinar. Mauris sed rhoncus ante, ut imperdiet eros. Proin efficitur interdum augue, id ultrices sem condimentum vel. In nec tristique diam. Maecenas viverra tortor vitae diam cursus, eu tempor lorem dictum. Mauris ipsum augue, pulvinar ac pretium bibendum, fringilla et leo. In lobortis lectus quis nulla finibus, eu dictum dolor ultricies. Fusce mollis est nec pellentesque tincidunt. Nam ornare tincidunt tellus ut ornare. Proin at nibh justo. Sed facilisis lacinia ex, eget imperdiet justo rhoncus quis. Donec vestibulum, sapien vitae tempor dignissim, lectus arcu viverra sem, nec condimentum diam enim id velit.'
    },
  ];
  return (
    <div className="Project">
      <div className="Project-container">
        <p className="Project-text__title">Our Latest Projects</p>
        <p className="Project-text__subtitle">Here is our latest projects. You'll love them!</p>
        <div className="Projectcomponent-container">
          {ProjectItems.map((item,index) => (
            <div className='Projectcomponent-imgs' key={index}>
            <div className="Projectimg-wrap">
              <img src={item.img} alt={item.title} className='Projectcomponent-img'/>
            </div>
            <div className="Project-links" onClick={() => moreDetails(item)}>
              <h4>{item.title}</h4>
            </div>
          </div>
          ))}
        </div>   
      </div>
      {isShowDetailMoreModal && <ProjectModal onHide={CloseModalMoreDetails} body={[mainProjectInfos.img, mainProjectInfos.title, mainProjectInfos.text]} />}
    </div>
  )
}

export default Project;

