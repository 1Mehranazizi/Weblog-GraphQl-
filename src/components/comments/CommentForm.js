import React, { useState } from "react";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = () => {
  const { slug } = useParams();
  const [comment, setComment] = useState({
    name: "",
    email: "",
    text: "",
  });
  const { name, email, text } = comment;
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const submitComment = () => {
    if (name && email && text) {
      sendComment();
      toast.success("نظر شما با موقیت ارسال شد و منتظر تایید می باشد", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
     
    } else {
      toast.warn("لطفا تمامی فیلد هارا پرکنید", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <Card
      sx={{ boxShadow: "0 5px 15px rgba(112,112,112,0.2)", borderRadius: 4 }}
    >
      <Grid container spacing={3} padding={2}>
        <Grid item xs={12}>
          <Typography
            component="h4"
            varinat="h5"
            fontWeight={600}
            color="primary"
          >
            نطر خود را با ما در میان بگذراید
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="نام و نام خانوادگی"
            varinat="outlined"
            fullWidth
            name="name"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="ایمیل"
            varinat="outlined"
            fullWidth
            name="email"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            varinat="outlined"
            placeholder="نظر شما"
            multiline
            minRows={4}
            fullWidth
            name="text"
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <Button variant="contained" disabled onClick={submitComment}>
              در حال ارسال
            </Button>
          ) : (
            <Button variant="contained" onClick={submitComment}>
              ثبت نظر
            </Button>
          )}
        </Grid>
      </Grid>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Card>
  );
};

export default CommentForm;
