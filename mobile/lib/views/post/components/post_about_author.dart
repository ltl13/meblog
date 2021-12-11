import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class PostAboutAuthor extends StatelessWidget {
  const PostAboutAuthor({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ValueNotifier<bool>>(
        create: (context) => ValueNotifier<bool>(false),
        builder: (context, child) {
          return Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Flexible(
                flex: 1,
                child: CircleAvatar(
                  backgroundImage: AssetImage(post.author.image),
                  radius: 20.sp,
                ),
              ),
              Flexible(
                flex: 3,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      post.author.name,
                      style: TextStyle(
                        color: mySubHeadlineColor,
                        fontFamily: 'Roboto',
                        fontWeight: FontWeight.w500,
                        fontSize: 14.sp,
                      ),
                    ),
                    RichText(
                      overflow: TextOverflow.ellipsis,
                      maxLines: 2,
                      text: TextSpan(
                        text: post.author.description,
                        style: TextStyle(
                          color: myTextColor,
                          fontFamily: 'Roboto',
                          fontSize: 12.sp,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Flexible(
                flex: 2,
                child: Consumer<ValueNotifier<bool>>(
                  builder: (context, provider, child) => TextButton(
                    onPressed: () => provider.value = !provider.value,
                    style: TextButton.styleFrom(
                      fixedSize: Size(80.sp, 20.sp),
                      backgroundColor:
                          provider.value ? myMainColor : myButtonColor,
                      shape: RoundedRectangleBorder(
                        side: BorderSide(color: myButtonColor, width: 1),
                        borderRadius: BorderRadius.circular(50.sp),
                      ),
                    ),
                    child: Text(
                      provider.value ? "Following" : "Follow",
                      style: TextStyle(
                        fontFamily: 'Roboto',
                        fontSize: 12.sp,
                        color: myButtonTextColor,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          );
        });
  }
}
