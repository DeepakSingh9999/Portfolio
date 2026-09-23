import { 
  IconBrandJavascript, 
  IconBrandPython, 
  IconBrandReact, 
  IconBrandNodejs, 
  IconSql,
  IconBrandGit, 
  IconBrandGitlab,
  IconBrandHtml5,
  IconFileTypeCss,
  IconBrandBootstrap,
  IconFileDatabase,
  IconBinaryTree,
  IconTools,
  IconDevicesCode,
  IconUserBolt,
  IconBulb,
  IconBrandGoogle,
  IconPhoneDone,
  IconHelp

} from '@tabler/icons-react';

const iconMap = {
  javascript: IconBrandJavascript,
  python: IconBrandPython,
  react: IconBrandReact,
  node: IconBrandNodejs,
  sql: IconSql,
  git: IconBrandGit,
  gitlab: IconBrandGitlab,
  html: IconBrandHtml5,
  css: IconFileTypeCss,
  bootstrap: IconBrandBootstrap,
  datastructures: IconFileDatabase,
  algorithms: IconBinaryTree,
  test: IconTools,
  debug: IconDevicesCode,
  bot: IconUserBolt,
  bulb: IconBulb,
  google: IconBrandGoogle,
  phone: IconPhoneDone
};

const menuItems = [
  { id: 1, label: 'JavaScript', iconName: 'javascript' },
  { id: 2, label: 'Python', iconName: 'python' },
  { id: 3, label: 'React', iconName: 'react' },
  { id: 4, label: 'Node', iconName: 'node' },
  { id: 5, label: 'Sql', iconName: 'sql' },  
  { id: 6, label: 'Git', iconName: 'git' },
  { id: 7, label: 'Gitlab', iconName: 'gitlab' },
  { id: 8, label: 'HTML', iconName: 'html' },
  { id: 9, label: 'CSS', iconName: 'css' },
  { id: 10, label: 'Bootstrap', iconName: 'bootstrap' },  
  { id: 11, label: 'Data Structures', iconName: 'datastructures' },
  { id: 12, label: 'Algorithms', iconName: 'algorithms' },
  { id: 13, label: 'Testing', iconName: 'test' },
  { id: 14, label: 'Debugging', iconName: 'debug' },
  { id: 15, label: 'GenAI', iconName: 'bot' },
  { id: 16, label: 'Problem Solving', iconName: 'bulb' },
  { id: 17, label: 'Google Workspace', iconName: 'google' },
  { id: 18, label: 'Communication', iconName: 'phone' },
];


function GradientStar() {
  const gradientId = 'yellow-red-gradient';

  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="orange" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
    </svg>
  );
}



function Skills() {
  return (
    <section aria-labelledby="skills">
      <div className="section-heading">
        <h2 id="skills">Skills</h2>
      </div>

      <ul className="skills-container center">
        {menuItems.map(({id, iconName, label}) => {
          const SelectedIcon = iconMap[iconName] || IconHelp;

          return (
            <li key={id}  className="tablet bottom-animation">
                <GradientStar />
                <SelectedIcon size={60} stroke={1.5} style={{ stroke: `url(#yellow-red-gradient)` }}/>
                <p className="skill-text">{label}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;