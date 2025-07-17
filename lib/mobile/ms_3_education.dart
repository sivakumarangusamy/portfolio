import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../statics/key_holders.dart';
import '../theme/app_theme.dart';
import '../widgets/container_card.dart';
import '../widgets/frame_title.dart';

class MS3Education extends StatelessWidget {
  const MS3Education({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      key: KeyHolders.educationKey,
      color: AppThemeData.backgroundGrey,
      child: Padding(
        padding: const EdgeInsets.only(bottom: 40.0, left: 40.0, right: 40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 30.0),
            const FrameTitle(
                title: DataValues.educationTitle,
                description: DataValues.educationDescription),
            const SizedBox(height: 30.0),
            ContainerCard().type2(
              image: 'britto',
              title: DataValues.educationOrg1Title,
              values: [
                DataValues.educationOrg1Course2Name,
                DataValues.educationOrg1Course2Grade,
                DataValues.educationOrg1Course2Year,
                DataValues.educationOrg1Course3Name,
                DataValues.educationOrg1Course3Year,
                DataValues.educationOrg1Course3Year2,
              ],
              message: DataValues.linkedinURL.toString(),
              url: DataValues.linkedinURL,
            ),
            const SizedBox(height: 20.0),
                        ContainerCard().type2(
              image: 'john',
              title: DataValues.educationOrg2Title,
              values: [
                DataValues.educationOrg2Course2Name,
                DataValues.educationOrg2Course2Grade,
                DataValues.educationOrg2Course2Year,
                DataValues.educationOrg2Course3Name,
                DataValues.educationOrg2Course3Year,
                DataValues.educationOrg2Course3Year2,
              ],
              message: DataValues.linkedinURL.toString(),
              url: DataValues.linkedinURL,
            ),
            const SizedBox(height: 20.0),
                        ContainerCard().type2(
              image: 'slcs',
              title: DataValues.educationOrg3Title,
              values: [
                DataValues.educationOrg3Course2Name,
                DataValues.educationOrg3Course2Grade,
                DataValues.educationOrg3Course2Year,
                DataValues.educationOrg3Course3Name,
                DataValues.educationOrg3Course3Year,
                DataValues.educationOrg3Course3Year2,
              ],
              message: DataValues.linkedinURL.toString(),
              url: DataValues.linkedinURL,
            ),
          ],
        ),
      ),
    );
  }
}
