import { Subject } from '../types';

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'Computer Science',
        description: 'A foundational course covering programming basics, algorithms, and problem-solving techniques using modern languages.',
        createdAt: new Date('2025-01-15')
    },
    {
        id: 2,
        code: 'MATH201',
        name: 'Linear Algebra',
        department: 'Mathematics',
        description: 'Study of vector spaces, linear transformations, matrices, and their applications in science and engineering.',
        createdAt: new Date('2025-01-20')
    },
    {
        id: 3,
        code: 'BUS301',
        name: 'Principles of Marketing',
        department: 'Business Administration',
        description: 'An introduction to marketing strategies, consumer behavior, market research, and brand management in the digital age.',
        createdAt: new Date('2025-02-01')
    }
];
