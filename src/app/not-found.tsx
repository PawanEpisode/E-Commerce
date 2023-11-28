import Container from '@/components/Container';
import CustomButton from '@/components/CustomButton';

const NotFoundPage = () => {
  return (
    <Container className='flexcss py-20'>
      <div className='max-w-2xl min-h-[290px] flex 
      flex-col items-center justify-center gap-y-5'>
        <h2 className='text-4xl font-bold'>Your Page not found</h2>
        <p>
          Oops! The page you are looking for does not exist.
          It might have been moved or deleted.
        </p>
        <CustomButton href='/' btnText='Back to Home'/>
      </div>
    </Container>
  )
}

export default NotFoundPage