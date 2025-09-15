import { useMyHelpApplyList } from '@/features/help-apply/model/use-my-help-apply-list';
import { MyHelpApplyItem } from '@/features/help-apply/ui/my-help-apply-item';

function MyHelpApplyList() {
  const { data } = useMyHelpApplyList();
  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map((d) => (
        <MyHelpApplyItem applicant={d} key={d.applicationId} />
      ))}
    </div>
  );
}

export { MyHelpApplyList };
