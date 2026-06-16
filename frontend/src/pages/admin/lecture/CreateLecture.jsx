import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CreateLecture = () => {
    const navigate = useNavigate();
    const params = useParams();
    const courseId = params.courseId
    const isLoading = false;
    const [lectureTitle, setLectureTitle] = useState()

    const createLectureHandler = async ()=>{
        
    }
  return (
    <div className='w-full p-10'>

            {/* Heading */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold'>
                    Lets add lectures, add some basic  details for your new lecture
                </h1>

                <p className='text-gray-500 mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            {/* Form */}
            <div className='max-w-xl space-y-6'>

                {/* Title */}
                <div className='space-y-2'>
                    <Label>Title</Label>

                    <Input
                        type='text'
                        value={lectureTitle}
                        onChange={(e) => setLectureTitle(e.target.value)}
                        placeholder='Your Title Name    '
                    />
                </div>

                {/* Category */}
               
                <div className='flex items-center gap-2'>
                    <Button variant='outline' onClick={() => navigate(`/admin/course/${courseId}`)}>Back to Course</Button>
                    <Button disabled={isLoading} onClick={createLectureHandler}>
                        {
                            isLoading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Please Wait
                                </>

                            ) : "Create Lecture"
                        }
                    </Button>
                </div>

            </div>
        </div>
  )
}

export default CreateLecture