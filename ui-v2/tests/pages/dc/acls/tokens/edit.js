export default function(
  visitable,
  submitable,
  deletable,
  cancelable,
  clickable,
  attribute,
  collection
) {
  return submitable(
    cancelable(
      deletable(
        {
          visit: visitable(['/:dc/acls/tokens/:token', '/:dc/acls/tokens/create']),
          use: clickable('[data-test-use]'),
          confirmUse: clickable('button.type-delete'),
          // TODO: Also see tokens/edit, these should get injected
          newPolicy: clickable('[data-test-new-policy]'),
          policyForm: submitable(
            cancelable({}, '[data-test-policy-form]'),
            '[data-test-policy-form]'
          ),
          policies: collection(
            '[data-test-policies] [data-test-tabular-row]',
            deletable(
              {
                expand: clickable('label'),
              },
              '+ tr'
            )
          ),
        },
        'form > div'
      )
    )
  );
}
