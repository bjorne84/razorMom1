using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace razorMom1.Classes
{
    public class Course
    {
        private string courseId;
        private string courseName;

        public Course (string courseId, string courseName)
        {
            this.courseId = courseId;
            this.courseName = courseName;
        }

        public string CourseID
        {
            get { return courseId; }
            set { courseId = value; }
        }

        public string CourseName
        {
            get { return courseName; }
            set { courseName = value; }
        }
    
    }

}


