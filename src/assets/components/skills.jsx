import { 
  IconBrandJavascript, 
  IconBrandPython,
  IconHexagonLetterC,
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
  c: IconHexogonLetterC,
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
  { id: 3, label: 'C', iconName: 'c' },
  { id: 4, label: 'React', iconName: 'react' },
  { id: 5, label: 'Node', iconName: 'node' },
  { id: 6, label: 'Sql', iconName: 'sql' },  
  { id: 7, label: 'Git', iconName: 'git' },
  { id: 8, label: 'Gitlab', iconName: 'gitlab' },
  { id: 9, label: 'HTML', iconName: 'html' },
  { id: 10, label: 'CSS', iconName: 'css' },
  { id: 11, label: 'Bootstrap', iconName: 'bootstrap' },  
  { id: 12, label: 'Data Structures', iconName: 'datastructures' },
  { id: 13, label: 'Algorithms', iconName: 'algorithms' },
  { id: 14, label: 'Testing', iconName: 'test' },
  { id: 15, label: 'Debugging', iconName: 'debug' },
  { id: 16, label: 'GenAI', iconName: 'bot' },
  { id: 17, label: 'Problem Solving', iconName: 'bulb' },
  { id: 18, label: 'Google Workspace', iconName: 'google' },
  { id: 19, label: 'Communication', iconName: 'phone' },
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
