import * as S from '../../pages/mypage.style';
import Input from '@/components/input/Input';
import { inputProps } from '@/pages/myPage';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ModalAlert from '../Modal/ModalAlert';
import axios from 'axios';

const ProfilePasswordBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
    watch,
  } = useForm({ mode: 'onChange', defaultValues: { password: '', newpassword: '', passwordCheck: '' } });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = async () => {
    const currentPassword = getValues('password');
    const newPassword = getValues('newpassword');
    if (!currentPassword) {
      setIsModalOpen(true);
    } else {
      try {
        const response = await axios.put(
          'https://sp-taskify-api.vercel.app/4-8/auth/password',
          {
            password: currentPassword,
            newPassword: newPassword,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
      } catch (error: any) {
        if (error.response.status === 400) {
          setIsModalOpen(true);
        }
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (watch('newpassword') !== watch('passwordCheck') && watch('passwordCheck')) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      });
    } else {
      clearErrors('passwordCheck');
    }
  }, [watch('newpassword'), watch('passwordCheck')]);
  return (
    <S.myPagePasswordBox>
      <h2>비밀번호 변경</h2>
      <S.myPageProfilePasswordInputBox>
        <Input
          id='password'
          label='현재 비밀번호'
          {...inputProps}
          type='password'
          placeholder='현재 비밀번호 입력'
          {...register('password', {
            required: true,
          })}
        />
        <Input
          id='newpassword'
          label='새 비밀번호'
          {...inputProps}
          type='password'
          placeholder='새 비밀번호 입력'
          {...register('newpassword', {
            minLength: { value: 8, message: '8자 이상 입력해 주세요.' },
          })}
          errorMsg={errors.newpassword ? errors.newpassword.message : ''}
        />
        <Input
          id='passwordCheck'
          label='새 비밀번호 확인'
          {...inputProps}
          type='password'
          placeholder='새 비밀번호 입력'
          {...register('passwordCheck', {
            required: true,
            validate: (value) => value === getValues('newpassword') || '비밀번호가 일치하지 않습니다',
          })}
          errorMsg={errors.passwordCheck ? errors.passwordCheck.message : ''}
        />
      </S.myPageProfilePasswordInputBox>
      <S.passwordButton type='button' onClick={handleSubmit(onSubmit)} $isactive={isValid}>
        변경
      </S.passwordButton>
      {isModalOpen && <ModalAlert message='현재 비밀번호가 틀렸습니다.' onClose={handleCloseModal}></ModalAlert>}
    </S.myPagePasswordBox>
  );
};

export default ProfilePasswordBox;
