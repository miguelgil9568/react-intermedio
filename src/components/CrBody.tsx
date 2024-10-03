import React, { JSX } from 'react';
import './Sidebar.scss';

interface CrBody {
  icon: JSX.Element;
  label: string;
}

const CrBody: React.FC = () => {
//   const options: CrBody[] = [
//     { icon: <FaRegUserCircle />, label: 'Inicio' },
//     { icon: <FaRegUserCircle />, label: 'Empresas' },
//     { icon: <MdFormatListBulleted />, label: 'Formularios' },
//     { icon: <FaRegUserCircle />, label: 'Estadísticas' },
//   ];

  return (
    <aside className='sidebar_container'>
      <ul className='sidebar_list'>
        {/* {options.map((option, index) => (
          <li key={index} className='sidebar_item'>
            <span className='sidebar_icon'>{option.icon}</span>
            <span className='sidebar_label'>{option.label}</span>
          </li>
        ))} */}
      </ul>
    </aside>
  );
};

export default CrBody;
