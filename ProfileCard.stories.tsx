import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './index';

const leadershipTeam = [
  {
    name: 'Peter Goldberger',
    role: 'Executive Director',
    figmaNode: '976:6094',
    bio: `As Executive Director of the 32BJ Benefit Funds, Peter Goldberger oversees the administration, operation and planning for the eleven multi-employer funds that deliver a broad range of benefits to more than 187,122 members and 288,330 covered lives with a combined asset portfolio of $9.4 billion. Prior to his appointment as Executive Director in 2018, Mr. Goldberger served as Deputy Executive Director for nine years and in that time worked closely with the Executive Director on the restructuring of the health benefits to eliminate deficits, the expansion of the reserves of all the funds, and the move of the headquarters to more efficient space. Mr. Goldberger is also responsible for charting the Funds’ future growth and its response to an ever increasing demand for the organization’s services. Prior to joining the Funds, Peter served as Chief of Staff for the SEIU Local 32BJ, and as Director of Education and Mobilization for UNITE/ACTWU. Mr. Goldberger holds an A.B. in History from Brown University.`
  },
  {
    name: 'Steve Jenkins',
    role: 'Deputy Executive Director',
    figmaNode: '976:6082',
    bio: `As Deputy Executive Director for 32BJ Benefit Funds, Steve Jenkins works with Fund and Department Directors to plan and manage key program objectives. Mr. Jenkins started with 32BJ Funds in January 2018. Prior to joining the Funds he worked for fourteen years for SEIU Local 32BJ in several capacities including Director of Operations and Director of the Contract and Grievance Center. Mr. Jenkins has also worked with Make the Road New York and The Door’s Legal Services Center. Mr. Jenkins holds a J.D. from Northeastern University and a B.A. in Film from the University of Michigan.`
  },
  {
    name: 'Elaine Pommells',
    role: 'Director of Finance and Administration',
    figmaNode: '976:6083',
    bio: `As Director of Finance and Administration of the 32BJ Benefit Funds, Elaine J. Pommells assists in the administration, operation and planning for the eleven multi-employer funds that deliver a broad range of benefits to more than 187,122 members and 288,330 covered lives with a combined asset portfolio of $9.4 billion. In this capacity, Elaine oversees the financial and administrative operations of the Funds. Elaine manages and forecasts cash, and assesses risks in order to make educated, economic decisions about current and future funds operations. Prior to joining the Funds in 2017, Elaine served as Controller at the Robin Hood Foundation, a non-profit foundation that targets poverty in New York City by applying sound investment principles to philanthropy. She was the Chief Financial and Administrative Office (CFAO) at the Stanley M. Isaacs Neighborhood Center, Inc., which serves over 6,000 clients from children through senior citizens in Yorkville and East Harlem. Elaine has also worked at The New York Times in a variety of capacities. As Financial Director, she has held financial and operational roles that involved leading teams, building consensus, collaborating with diverse groups and overseeing multiple departments. Elaine received a bachelor’s degree from Bernard M. Baruch. She also has a master’s degree in General Management from Harvard Business School.`
  },
  {
    name: 'Randi Farber',
    role: 'Director of Technology & Operations',
    figmaNode: '985:5818',
    bio: (
      <>
        <p>
          As Director of Technology & Operations of the 32BJ Benefit Funds since
          2012, Randi Farber oversees the technology supporting the
          administration of the 32BJ Benefit Funds. In this capacity, Ms. Farber
          provides leadership for the continued development of an innovative,
          robust, and secure information technology environment throughout the
          Funds. The primary responsibilities encompass a wide variety of
          strategic technology issues:
        </p>

        <ul>
          <li>Governance and policy</li>
          <li>Resource allocation</li>
          <li>Information technology protocols</li>
          <li>The Funds Information Technology organization</li>
        </ul>

        <p>
          The Funds Information Technology Department provides delivery of IT
          infrastructure and services, information security systems and
          compliance, administrative systems, and end user support services.
          Prior to joining the Funds, Randi served as the Chief Financial
          Officer of Workers United, UNITE HERE and UNITE, labor unions formed
          as the result of mergers and the dissolution of a merger, where her
          responsibilities included the oversight of the finance, information
          technology, and internal audit functions for the international
          headquarters of the union. Ms. Farber is a Certified Public
          Accountant and holds a Masters degree in Industrial and Organizational
          Psychology from Brooklyn College.
        </p>
      </>
    )
  },
  {
    name: 'Jay Cruz',
    role: 'Director of Human Resources and Organizational Development',
    figmaNode: '985:5838',
    bio: `As Director of Human Resources and Organizational Development for 32BJ Benefit Funds, Jay Cruz provides overall strategic direction and ensures the effective management of all aspects of human resources, including compensation and benefits, compliance with federal and state employment laws, recruitment, talent management, training and development, performance management, employee retention, and HR data management and reporting metrics. Prior to joining the Funds, Jay served in several capacities during his tenure with the YMCA of Greater New York, including Executive Director for the Long Island City branch and Director of Human Resources Administration for the largest YMCA in the world, the West Side YMCA. Jay also worked for prominent non-profit organizations such as Rainforest Alliance, a global organization focused on sustainability and the Guttmacher Institute, an organization focused on reproductive health and rights. Most recently, Jay served as the Associate Vice President of Human Resources for the Fortune Society, another renowned non-profit organization that serves individuals impacted by the criminal justice system. Jay holds a B.B.A. in Human Resources Management from Pace University and an Executive Masters in Industrial and Labor Relations from Baruch College, Zicklin School of Business.`
  },
  {
    name: 'Thomas Ormsby',
    role: 'Director, Billing & Employer Services',
    figmaNode: '985:5852',
    bio: `As Director of the 32BJ Benefit Funds Billing & Employer Services departments, Thomas Ormsby oversees the management and administration of employer collections and remittance procedures. In this capacity, Mr. Ormsby has successfully executed the roll out of electronic billing to employers, and manages the Funds Payroll Compliance audit program to ensure proper reporting and collection of findings. Prior to joining the Funds, Tom served as Vice President, Controller for ABM Industries, which acquired his predecessor employer, OneSource, Inc, where he partnered with SEIU Local 32BJ to transition the combined companies to an automated union benefits payment system, thereby streamlining the payment process and future audits. Prior to the acquisition, Mr. Ormsby served as Vice President and Controller for OneSource, NY, Inc, where he developed a cost savings program that reduced outstanding account receivables over 90 days by 90%. Mr. Ormsby holds a Masters Degree from Seton Hall University in Taxation, and a Bachelor’s Degree in Accounting from Fordham University.`
  },
  {
    name: 'Antonio Rodriguez',
    role: 'Director of Investments',
    figmaNode: '985:5866',
    bio: `As Director of Investments for the 32BJ Benefit Funds, Antonio Rodriguez monitors and evaluates the various Funds’ investment portfolios with assets totaling $9.4 billion. Mr. Rodriguez coordinates with the Funds’ executive leadership, investment advisers, managers, and counsel to implement the trustees investment program and policies in fulfillment of their fiduciary duty. Prior to his role at the 32BJ Benefit Funds, Antonio was the Director of Investment Strategy at the New York City Board of Education Retirement System. Antonio has also served as a trustee for four of the New York City Retirement Systems (NYCRS) and the New York City Deferred Compensation Program. Before holding various roles at NYCRS, he was Research Director at Service Employees International Union (SEIU) Local 1107 in Las Vegas, Nevada and a Financial Analyst with the SEIU Capital Stewardship program in New York. Antonio holds a BSBA in Accounting and History from Washington University in St. Louis, a Masters in History from CUNY-City College of New York, and holds the Chartered Financial Analyst (CFA) designation and Certificate in Performance Measurement.`
  },
  {
    name: 'Linda Nelson',
    role: 'Director, 32BJ Training Fund',
    figmaNode: '985:5880',
    bio: `As Director of the Training Fund for the 32BJ Benefit Funds and with over 30 years of experience, Linda Nelson oversees the administration of the Fund’s training program that trains over 10,000 members each year and offers more than 250 different courses, ranging from English as a Second Language to Green Buildings, and everything in-between. Prior to joining the Funds, Ms. Nelson served in many capacities in the field of adult education. Starting at the Partnership for the Homeless, Linda launched and developed their Network program that helped previously homeless individuals find jobs. At the Consortium for Worker Education, Ms. Nelson developed and managed programs funded by the NYS Department of Labor that assisted unemployed workers in the aftermath of 9/11. Ms. Nelson received a Bachelor of Arts degree in Psychology from Skidmore College and a Master’s in Education from Teacher’s College at Columbia University.`
  },
  {
    name: 'Regine Breton',
    role: 'Director of Retirement Services',
    figmaNode: '985:5894',
    bio: `As Director of Retirement Services for the 32BJ Benefit Funds with over 25 years of experience, Regine Breton oversees the administration of the Fund’s retirement programs, in particular, the defined benefit pension plans, the 401(k) Supplemental Retirement Savings Plan, and the robust member education program. Ms. Breton provides oversight of all internal and outsourced administrative functions for the Retirement Services department, including management of shared functions with other departments at the Funds, such as Finance and Member Services. Prior to joining the Funds in 2011, Regine worked as a defined benefit and defined contribution plan consultant for several large HR consulting firms and managed various corporate retirement programs as well. Ms. Breton holds a B.S. in Business Administration and an MBA in Finance from St. John’s University.`
  }
];

const meta: Meta<typeof ProfileCard> = {
  title: 'Patterns/Leadership Team',
  component: ProfileCard,
  tags: ['autodocs'],
  args: leadershipTeam[0]
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};

export const LeadershipTeam: Story = {
  render: () => (
    <div className="ds-profile-grid">
      {leadershipTeam.map((person) => (
        <ProfileCard key={person.name} {...person} />
      ))}
    </div>
  )
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile390'
    }
  },
  render: () => (
    <div className="ds-profile-grid">
      {leadershipTeam.map((person) => (
        <ProfileCard key={person.name} {...person} />
      ))}
    </div>
  )
};
