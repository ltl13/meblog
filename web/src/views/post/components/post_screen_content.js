import {
  Grid,
  Typography,
  ButtonGroup,
  IconButton,
  Avatar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { BookmarkAdd, MoreHoriz } from "@mui/icons-material";
import React from "react";

export const PostScreenContent = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minWidth: "100vw", padding: "4rem 0 0 0" }}
    >
      <Grid xs={6.5} justifyContent="center" alignContent="center">
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Tahoma",
          }}
        >
          Bros., Lecce: We Eat at The Worst Michelin Starred Restaurant, Ever
        </Typography>
        <Grid
          direction="row"
          justifyContent="space-between"
          sx={{ display: "flex" }}
        >
          <Grid
            direction="row"
            sx={{ display: "flex" }}
            xs={6}
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg"
              sx={{ width: "2rem", height: "2rem" }}
            />
            <Typography fontSize="16px">Geraldine DeRuiter</Typography>
            <Typography fontSize="14px">Dec 9 • 10 min read</Typography>
          </Grid>
          <ButtonGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "10px 0",
              "& > *": {
                mr: "10px",
              },
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#6c91c2",
                width: "2rem",
                height: "2rem",
                borderRadius: "2rem",
                fontSize: "16px",
                color: "#181818",
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#6c91c2",
                width: "2rem",
                height: "2rem",
                borderRadius: "2rem",
                fontSize: "16px",
                color: "#181818",
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#6c91c2",
                width: "2rem",
                height: "2rem",
                borderRadius: "2rem",
                fontSize: "16px",
                color: "#181818",
              }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </IconButton>
            <IconButton>
              <BookmarkAdd fontSize="16px" />
            </IconButton>
            <IconButton>
              <MoreHoriz fontSize="16px" />
            </IconButton>
          </ButtonGroup>
        </Grid>
        <img
          src="https://miro.medium.com/max/1050/1*JxYfu0_CFzTM-r4U6x7OtA.png"
          alt=""
          style={{
            width: "100%",
            margin: "10px auto",
            display: "block",
          }}
        />
        <Typography
          paragraph={true}
          sx={{ fontFamily: "Tahoma", fontSize: "20px", margin: "10px, 0" }}
        >
          Note: This was originally published on The Everywhereist blog. There
          is something to be said about a truly disastrous meal, a meal forever
          indelible in your memory because it’s so uniquely bad, it can only be
          deemed an achievement. The sort of meal where everyone involved was
          definitely trying to do something; it’s just not entirely clear what.
          I’m not talking about a meal that’s poorly cooked, or a server who
          might be planning your murder — that sort of thing happens in the fat
          lump of the bell curve of bad. Instead, I’m talking about the long
          tail stuff — the sort of meals that make you feel as though the fabric
          of reality is unraveling. The ones that cause you to reassess the
          fundamentals of capitalism, and whether or not you’re living in a
          simulation in which someone failed to properly program this particular
          restaurant. The ones where you just know somebody’s going to lift a
          metal dome off a tray and reveal a single blue or red pill. I’m
          talking about those meals. At some point, the only way to regard that
          sort of experience — without going mad — is as some sort of community
          improv theater. You sit in the audience, shouting suggestions like, “A
          restaurant!” and “Eating something that resembles food” and “The
          exchange of money for goods, and in this instance the goods are a
          goddamn meal!” All of these suggestion go completely ignored. That is
          how I’ve come to regard our dinner at Bros, Lecce’s only
          Michelin-starred restaurant, as a means of preserving what’s left of
          my sanity. It wasn’t dinner. It was just dinner theater. No, scratch
          that. Because dinner was not involved. I mean — dinner played a role,
          the same way Godot played a role in Beckett’s eponymous play. The
          entire evening was about it, and guess what? IT NEVER SHOWED.
        </Typography>
        <img
          src="https://miro.medium.com/max/845/1*ruc9YQ1gJ9YhwEjMjB_Tvw.png"
          alt=""
          style={{ width: "100%", margin: "10px auto", display: "block" }}
        />
        <Typography
          paragraph={true}
          sx={{ fontFamily: "Tahoma", fontSize: "20px", margin: "10px, 0" }}
        >
          So no, we can’t call it dinner theater. Instead, we will say it was
          just theater. Very, very expensive theater. I realize that not
          everyone is willing or able to afford a ticket to Waiting for Gateau
          and so this post exists, to spare you our torment. We had plenty of
          beautiful meals in Lecce that were not this one, and if you want a
          lovely meal out, I’ll compile a list shortly. But for now, let us
          rehash whatever the hell this was. We headed to the restaurant with
          high hopes — eight of us in total, led into a cement cell of a room,
          Drake pumping through invisible speakers. It was sweltering hot, and
          no other customers were present. The décor had the of chicness of an
          underground bunker where one would expect to be interrogated for the
          disappearance of an ambassador’s child. Earlier that day, we’d seen a
          statue of a bear, chiseled into marble centuries ago, by someone who
          had never actually seen a bear. This is the result:
        </Typography>
        <img
          src="https://miro.medium.com/max/1050/1*27GpSnf8K6dcTIHBUsj_Nw.png"
          alt=""
          style={{ width: "100%", margin: "10px auto", display: "block" }}
        />
        <Typography
          paragraph={true}
          sx={{ fontFamily: "Tahoma", fontSize: "20px", margin: "10px, 0" }}
        >
          And this is a perfect allegory for our evening. It’s as though someone
          had read about food and restaurants, but had never experienced either,
          and this was their attempt to recreate it. What followed was a
          27-course meal (note that “course” and “meal” and “27” are being used
          liberally here) which spanned 4.5 hours and made me feel like I was a
          character in a Dickensian novel. Because — I cannot impart this enough
          — there was nothing even close to an actual meal served. Some
          “courses” were slivers of edible paper. Some shot were glasses of
          vinegar. Everything tasted like fish, even the non-fish courses. And
          nearly everything, including these noodles, which was by far the most
          substantial dish we had, was served cold.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PostScreenContent;
