# Portfolio Data Files

This directory contains all the personal information and data for the portfolio. You can easily update your information by modifying these files without touching the component code.

## Files Overview

### `personalInfo.ts`
Contains all your personal information including:
- **Name**: First and last name
- **Title**: Professional title/role
- **Bio**: Short bio and detailed paragraphs
- **Contact**: Email, location, GitHub, LinkedIn
- **Education**: Degree, institution, graduation year
- **Avatar**: Profile image URL and fallback initials

### `experience.ts`
Contains your work experience data:
- **ExperienceItem**: Interface for each job entry
- **experienceData**: Array of all your work experiences
- Each entry includes: title, company, location, period, achievements

### `projects.ts`
Contains your project portfolio:
- **Project**: Interface for each project
- **projectsData**: Array of all your projects
- Each project includes: title, description, tags, image, URLs, featured status

### `skills.ts`
Contains your skills and technical proficiency:
- **SkillCategory**: Interface for skill categories
- **TechnicalProficiency**: Interface for proficiency levels
- **skillCategories**: Array of skill categories with icons and skills
- **technicalProficiency**: Array of proficiency percentages

## How to Update Your Information

### 1. Personal Information
Edit `personalInfo.ts`:
```typescript
export const personalInfo: PersonalInfo = {
  name: {
    first: "Your", // Update your first name
    last: "Name"   // Update your last name
  },
  title: "Your Professional Title", // Update your title
  contact: {
    email: "your.email@example.com", // Update your email
    location: "Your City, Country",   // Update your location
    github: "https://github.com/yourusername", // Update your GitHub
    linkedin: "https://linkedin.com/in/yourprofile" // Add LinkedIn if you have one
  },
  // ... update other fields as needed
};
```

### 2. Work Experience
Edit `experience.ts`:
```typescript
export const experienceData: ExperienceItem[] = [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Start Date - End Date",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      // Add more achievements
    ]
  },
  // Add more experience entries
];
```

### 3. Projects
Edit `projects.ts`:
```typescript
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    tags: ["React", "Node.js", "MongoDB"], // Update technologies
    image: "/img/your-project-image.png", // Update image path
    githubUrl: "https://github.com/yourusername/project", // Add GitHub URL
    liveUrl: "https://your-project.com", // Add live URL
    featured: true // Set to true for featured projects
  },
  // Add more projects
];
```

### 4. Skills
Edit `skills.ts`:
```typescript
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Code", // Icon name from lucide-react
    skills: ["React", "Vue.js", "TypeScript"] // Update skills
  },
  // Add more categories
];

export const technicalProficiency: TechnicalProficiency[] = [
  { name: "Frontend Development", percentage: 95 }, // Update percentages
  { name: "Backend Development", percentage: 85 },
  // Add more proficiencies
];
```

## Adding New Data

### Adding a New Project
1. Add your project image to the `public/img/` directory
2. Add a new entry to the `projectsData` array in `projects.ts`
3. Make sure to increment the `id` field

### Adding a New Skill Category
1. Add a new entry to the `skillCategories` array in `skills.ts`
2. Use one of these icon names: "Code", "Database", "Palette", "Cloud"
3. Add your skills to the `skills` array

### Adding a New Work Experience
1. Add a new entry to the `experienceData` array in `experience.ts`
2. Include all required fields: title, company, location, period, achievements

## Image Management

- Place all project images in the `public/img/` directory
- Use descriptive filenames (e.g., "E-commerce Platform.png")
- Supported formats: PNG, JPG, JPEG
- Recommended size: 800x600px or similar aspect ratio

## Notes

- All data files use TypeScript interfaces for type safety
- Changes to these files will automatically reflect in the portfolio
- No need to modify component files when updating personal information
- The portfolio will automatically rebuild when you save changes
