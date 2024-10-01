import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";
import { Input } from "@mui/material";

function FormHome() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
  } = useForm({
    mode: "onSubmit", // Валидация будет срабатывать при отправке формы
  });

  // Функция обработки отправки формы
  function onSubmit(data) {
    console.log("Данные формы:", data);
  }

  const nameValue = watch("Name");

  useEffect(() => {
    const subscription = watch((data) => {
      // Если длина имени больше 20 символов, устанавливаем ошибку
      if (nameValue?.length > 20) {
        setError("Name", {
          type: "maxLength",
          message: "Длина имени не должна быть больше 20 символов",
        });
      } else if (nameValue?.length > 0 && nameValue?.length < 3) {
        setError("Name", {
          type: "minLength",
          message: "Имя не должно быть менее 3 символов",
        });
      } else {
        clearErrors("Name");
      }
    });

    return () => subscription.unsubscribe();
  }, [nameValue, setError, clearErrors, watch]);

  return (
    <div className={styles.div_dinamic_form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.dinamic_Form}>
        <Input
          {...register("Name", {
            required: {
              value: true,
              message: "Это поле обязательно для заполнения",
            },
            minLength: {
              value: 3,
              message: "Имя не должно быть менее 3 символов",
            },
            maxLength: {
              value: 20,
              message: "Длина имени не должна быть больше 20 символов",
            },
          })}
          type="text"
          id="Name"
          onBlur={() => trigger("Name")} // Проверка валидации при потере фокуса
          placeholder="Name"
        />
        {/* Сообщения об ошибках для поля "Name" */}
        {errors.Name && <p className={styles.error_message}>{errors.Name.message}</p>}

        <Input
          {...register("phoneNumber", { // Измените имя на phoneNumber
            required: {
              value: true,
              message: "Это поле обязательно для заполнения",
            },
            minLength: {
              value: 8,
              message: "Номер должен быть не менее 8 символов",
            },
          })}
          type="text"
          id="phoneNumber" // Измените id на phoneNumber
          placeholder="Phone number"
          className={styles.input_pas}
        />
        {/* Сообщения об ошибках для поля "Phone number" */}
        {errors.phoneNumber && <p className={styles.error_message}>{errors.phoneNumber.message}</p>}

        <Input
          {...register("Email", { // Не забудьте зарегистрировать Password
            required: {
              value: true,
              message: "Это поле обязательно для заполнения",
            },
          })}
          type="email"
          id="Email"
          placeholder="Email"
          className={styles.input_email}
        />
        {/* Сообщения об ошибках для поля "Email" */}
        {errors.Email && <p className={styles.error_message_pas}>{errors.Email.message}</p>}

        <button type="submit" className={styles.btn_dinamic_form}>Submit</button>
      </form>
    </div>
  );
}

export default FormHome;